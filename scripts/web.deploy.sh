#!/usr/bin/env bash

# filename: web.deploy.sh

usage () { 
    error_exit "You need to put a name to the environment.\nExample: 'npm run web:deploy [test | prod]'" 
}

error_exit(){
	echo -e "\n$1"
	exit 0
}

get_domain(){
    DOMAIN=$(grep DOMAIN .env | cut -d '=' -f2)
}

deploy () {  

    if jest src --passWithNoTests; then
        echo -e "--Deploying web to $1--"
        echo -e "\nTest passed."

        npm run ms:list $1

        cp ./config/config.$1.js ./public/config.js
        cp ./src/config/config.$1.json ./src/config/config.json 
        cp ./src/api/api.$1.json ./src/api/api.local.json

        react-scripts build
        if [ "$1" = "test" ]; then
            aws s3 cp --recursive ./build s3://$1.$2
        else
            aws s3 cp --recursive ./build s3://$2 
        fi
        
        cp ./config/config.dev.js ./public/config.js
        cp ./src/config/config.dev.json ./src/config/config.json 
        cp ./src/api/api.dev.json ./src/api/api.local.json
        
    else 
        error_exit "Test failed. Canceling build."
    fi
}

if [ "$1" != "" ]; then
    case "$1" in
        test | prod)
            get_domain
            if [ "$DOMAIN" = "" ]; then
                error_exit "You need a DOMAIN in the .env file."
            fi

            echo -e "\n--Deploying to $1.$DOMAIN bucket"

            for opt in $@
            do
                case "$opt" in
                    u | update)
                        echo "Updating libraries."
                        npm i -f
                        npm update
                        npm audit fix
                        ;;
                esac
            done

            deploy "$1" "$DOMAIN"
            ;;

        *)
            usage
            ;;
    esac

else
    usage
fi

echo -e "\nFinished uploading."
