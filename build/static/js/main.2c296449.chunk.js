(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){e.exports=a(546)},133:function(e,t,a){},150:function(e,t,a){},35:function(e){e.exports={environment:"test",BUCKET:"android-imedia-uploads-bucket-test",AWS_ACCESS_KEY:"AKIAIHWILIGOTKRTC7AA",AWS_SECRET_KEY:"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",UserPoolId:"ap-southeast-1_ieJqiQwnj",ClientId:"28sp74svheb7udbnthif08og3l",IdentityPoolId:"ap-southeast-1:bfa0e37a-916c-40b5-bcee-654f044e7092",aurora_url:"http://test.auroramedia.live.s3-website-ap-southeast-1.amazonaws.com",products:[{name:"media-suite",url:"http://test.mediasuite.auroramedia.live.s3-website-ap-southeast-1.amazonaws.com"}]}},47:function(e,t,a){},539:function(e){e.exports={webUserManagment:"https://hieczvd5rd.execute-api.ap-southeast-1.amazonaws.com/test/webUserManagment/user/"}},546:function(e,t,a){"use strict";a.r(t);var n=a(65),o=a.n(n),r=a(111),s=a(0),l=a.n(s),d=a(22),c=a.n(d);a(133),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(14),u=a(16),m=a(15),p=a(17),h=a(27),w=a(112),g=a.n(w),E=(a(150),a(47),a(66)),y=a(548),f=a(121),b=a(552),_=a(551),C=a(550);var v=a(39),I=a(114),x=a.n(I),k=a(25),S=a(35),T=new k.d(S),P=function(e,t,a){var n={Username:e,Password:t},o=new k.a(n),r={Username:e,Pool:T},s=new k.b(r);s.authenticateUser(o,{onSuccess:function(e){a(null,e)},onFailure:function(e){a(e)},newPasswordRequired:function(e){console.log(s),console.log("U:",e),a(null,null,e,s)}})},B=function(e,t,a,n,o,r){console.log("userAttributes: ",n),console.log(n),delete n.email_verified,n.name=e,n.preferred_username=e,console.log(o),console.log("username",e),console.log("password",t),console.log("newPassword",a),console.log("userAttributes",n),o.completeNewPasswordChallenge(a,n,{onSuccess:function(e){new x.a.Credentials({accessKeyId:S.AWS_ACCESS_KEY,secretAccessKey:S.AWS_SECRET_KEY,sessionToken:null}).refresh(function(t){if(t)throw t;console.log("Success change password.",e),r(null,e)})},onFailure:function(e){console.log(e),r(null)}})},N=function(e,t){var a={Username:e,Pool:T},n="",o=new k.b(a);o.forgotPassword({onSuccess:function(e){console.log(e),n=e,t(null,e,o)},onFailure:function(e){console.log(e),t(e,null,o)},inputVerificationCode:function(){t(null,n,o,this)}})},U=function(e,t,a,n){a.confirmPassword(e,t,n)},O=a(36),j=a(549),A=a(119),M=a(120),R=a(122),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={show:!1,Password:"",ConfirmPassword:"",showPassword:!1,ok:!0},a.handleSave=function(){var e=document.getElementById("pwd_inputText").value,t=document.getElementById("con_pwd_inputText").value,n=a.state.ok;e!==t?(document.getElementById("con_pwd_inputText").style.borderColor="red",document.getElementById("warningText_4").style.visibility="visible",a.setState({ok:!1}),n=!1):(document.getElementById("warningText_4").style.visibility="hidden",document.getElementById("con_pwd_inputText").style.borderColor="#707070",!0===a.state.password_policy&&(n=!0)),!1!==n&&a.props.handleSave()},a.checkPasswordPolicy=function(e){var t=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(e.target.value);a.setState({password_policy:t}),t?(document.getElementById("pwdPolicy").style.color="#969292",document.getElementById("pwd_inputText").style.borderColor="#707070"):(document.getElementById("pwdPolicy").style.color="red",document.getElementById("pwd_inputText").style.borderColor="red",a.setState({ok:!1}))},a.checkConfirmPassword=function(){document.getElementById("pwd_inputText").value!==document.getElementById("con_pwd_inputText").value?(document.getElementById("con_pwd_inputText").style.borderColor="red",document.getElementById("warningText_4").style.visibility="visible",a.setState({ok:!1})):(document.getElementById("warningText_4").style.visibility="hidden",document.getElementById("con_pwd_inputText").style.borderColor="#707070")},a.handleChangePassword=function(e){return a.props.handleChangePassword(e)},a.handleChangeConfirmPassword=function(e){return a.props.handleChangeConfirmPassword(e)},a.handleClose=function(){return a.setState({show:!1})},a.handleShow=function(){return a.setState({show:!0})},a.showPassword=function(e){!1===a.state.showPassword?("mask_icon_1"===e.target.id?document.getElementById("pwd_inputText").type="text":document.getElementById("con_pwd_inputText").type="text",a.setState({showPassword:!0})):("mask_icon_1"===e.target.id?document.getElementById("pwd_inputText").type="password":document.getElementById("con_pwd_inputText").type="password",a.setState({showPassword:!1}))},a}return Object(p.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"pwd_bg"},l.a.createElement(j.a,{show:this.state.show,onHide:this.handleClose,className:"pwd_bg"},l.a.createElement("div",{className:"modal-content newpassword_modal"},l.a.createElement(j.a.Header,null,l.a.createElement(j.a.Title,{id:"pwd_title"},"Create new password")),l.a.createElement(j.a.Body,null,l.a.createElement("div",{id:"pwdPolicy"},"8 Characters or longer ",l.a.createElement("br",null),"At least one CAPITAL letter ",l.a.createElement("br",null),"At least one number ",l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement("form",null,l.a.createElement(A.a,null,l.a.createElement(M.a,{className:"pwd_label"},"Password"),l.a.createElement(y.a,null,l.a.createElement(f.a,{md:12},l.a.createElement(R.a,{className:"inputText",id:"pwd_inputText",type:"password",value:this.state.value,onChange:this.handleChangePassword,onKeyUp:this.checkPasswordPolicy}),l.a.createElement(R.a.Feedback,null)))),l.a.createElement("div",{id:"warningText_4"},"Password is not match"),l.a.createElement(A.a,null,l.a.createElement(M.a,{className:"pwd_label"},"Confirm Password"),l.a.createElement(y.a,null,l.a.createElement(f.a,{md:12},l.a.createElement(R.a,{className:"inputText",id:"con_pwd_inputText",type:"password",value:this.state.value,onChange:this.handleChangeConfirmPassword,onKeyUp:this.checkConfirmPassword}),l.a.createElement(R.a.Feedback,null)))))),l.a.createElement(j.a.Footer,null,l.a.createElement(_.a,{onClick:this.handleClose,id:"pwd_button_sec"},"Close"),l.a.createElement(_.a,{onClick:this.handleSave,id:"pwd_button_pri"},"Save")))))}}]),t}(s.Component),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={show:!1,forgotpwd_username:"",forgotpwd_password:"",forgotpwd_user_ok:!1,ok:!1,pass_policy:!1,match:!1},a.handleSend=function(){var e=document.getElementById("passcode_1").value,t=document.getElementById("passcode_2").value,n=document.getElementById("passcode_3").value,o=document.getElementById("passcode_4").value,r=document.getElementById("passcode_5").value,s=document.getElementById("passcode_6").value,l=document.getElementById("pwd_inputText").value,d=document.getElementById("con_pwd_inputText").value;0===e.length?(document.getElementById("passcode_1").style.borderColor="red",a.setState({ok:!1})):(document.getElementById("passcode_1").style.borderColor="#707070",a.setState({ok:!0})),0===t.length?(document.getElementById("passcode_2").style.borderColor="red",a.setState({ok:!1})):(document.getElementById("passcode_2").style.borderColor="#707070",a.setState({ok:!0})),0===n.length?(document.getElementById("passcode_3").style.borderColor="red",a.setState({ok:!1})):(document.getElementById("passcode_3").style.borderColor="#707070",a.setState({ok:!0})),0===o.length?(document.getElementById("passcode_4").style.borderColor="red",a.setState({ok:!1})):(document.getElementById("passcode_4").style.borderColor="#707070",a.setState({ok:!0})),0===r.length?(document.getElementById("passcode_5").style.borderColor="red",a.setState({ok:!1})):(document.getElementById("passcode_5").style.borderColor="#707070",a.setState({ok:!0})),0===s.length?(document.getElementById("passcode_6").style.borderColor="red",a.setState({ok:!1})):(document.getElementById("passcode_6").style.borderColor="#707070",a.setState({ok:!0})),0===l.length||!1===a.state.pass_policy?(document.getElementById("pwd_inputText").style.borderColor="red",document.getElementById("warningText_2").innerHTML="8 characters or longer. At least one CAPITAL letter and one numbers",document.getElementById("warningText_2").style.visibility="visible",a.setState({ok:!1})):(document.getElementById("pwd_inputText").style.borderColor="#707070",a.setState({ok:!0})),0===d.length?(document.getElementById("con_pwd_inputText").style.borderColor="red",a.setState({ok:!1})):(document.getElementById("con_pwd_inputText").style.borderColor="#707070",a.setState({ok:!0})),l!==d?(document.getElementById("warningText_2").innerHTML="Password is not match",document.getElementById("con_pwd_inputText").style.borderColor="red",document.getElementById("warningText_2").style.visibility="visible",a.setState({match:!1})):(document.getElementById("con_pwd_inputText").style.borderColor="#707070",a.setState({match:!0},a.handleSaveNewPassword()))},a.handleSaveNewPassword=function(){if(!0===a.state.ok&&!0===a.state.match&&!0===a.state.pass_policy){var e=document.getElementById("passcode_1").value,t=document.getElementById("passcode_2").value,n=document.getElementById("passcode_3").value,o=document.getElementById("passcode_4").value,r=document.getElementById("passcode_5").value,s=document.getElementById("passcode_6").value;a.props.getCode(e+t+n+o+r+s)}},a.handleChangeNewPassword=function(e){return a.props.handleChangeNewPassword(e)},a.handleClose=function(){return a.setState({show:!1})},a.handleShow=function(e){a.setState({show:!0}),!1===e&&(document.getElementById("passcode_1").style.borderColor="red",document.getElementById("passcode_2").style.borderColor="red",document.getElementById("passcode_3").style.borderColor="red",document.getElementById("passcode_4").style.borderColor="red",document.getElementById("passcode_5").style.borderColor="red",document.getElementById("passcode_6").style.borderColor="red",document.getElementById("warningText_3").style.visibility="visible")},a.resendVerificationCode=function(){return a.props.handleSend()},a.handleCode=function(){document.getElementById("passcode_1").style.borderColor="#707070",document.getElementById("passcode_2").style.borderColor="#707070",document.getElementById("passcode_3").style.borderColor="#707070",document.getElementById("passcode_4").style.borderColor="#707070",document.getElementById("passcode_5").style.borderColor="#707070",document.getElementById("passcode_6").style.borderColor="#707070"},a.showPassword=function(e){!1===a.state.showPassword?("mask_icon_1"===e.target.id?document.getElementById("pwd_inputText").type="text":document.getElementById("con_pwd_inputText").type="text",a.setState({showPassword:!0})):("mask_icon_1"===e.target.id?document.getElementById("pwd_inputText").type="password":document.getElementById("con_pwd_inputText").type="password",a.setState({showPassword:!1}))},a.checkConfirmPassword=function(){var e=document.getElementById("pwd_inputText").value,t=document.getElementById("con_pwd_inputText").value;0!==e.length&&0!==t.length&&(e!==t?(document.getElementById("warningText_2").innerHTML="Password is not match",document.getElementById("con_pwd_inputText").style.borderColor="red",document.getElementById("warningText_2").style.visibility="visible",a.setState({match:!1})):(!1!==a.state.pass_policy&&(document.getElementById("warningText_2").innerHTML="Password is not match",document.getElementById("warningText_2").style.visibility="hidden"),document.getElementById("warningText_2").style.visibility="hidden",document.getElementById("con_pwd_inputText").style.borderColor="#707070",a.setState({match:!0})))},a.checkPasswordPolicy=function(e){var t=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(e.target.value);a.setState({password_policy:t}),t?(document.getElementById("pwd_inputText").style.borderColor="#707070",document.getElementById("warningText_2").style.visibility="hidden",a.setState({pass_policy:!0})):(document.getElementById("pwd_inputText").style.borderColor="red",document.getElementById("warningText_2").innerHTML="8 characters or longer. At least one CAPITAL letter and one numbers",document.getElementById("warningText_2").style.visibility="visible",a.setState({pass_policy:!1}))},a}return Object(p.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"pwd_bg"},l.a.createElement(j.a,{show:this.state.show,onHide:this.handleClose,className:"pwd_bg"},l.a.createElement("div",{className:"modal-content verification_modal"},l.a.createElement(j.a.Header,null,l.a.createElement(j.a.Title,{id:"pwd_title"},"Verification Code & New Password")),l.a.createElement(j.a.Body,null,l.a.createElement("div",{id:"pwdPolicy"},"Please type the verification code",l.a.createElement("br",null),"sent to your email"),l.a.createElement("br",null),l.a.createElement("form",null,l.a.createElement(A.a,{id:"verify_form"},l.a.createElement(y.a,null,l.a.createElement(f.a,{md:2},l.a.createElement(R.a,{className:"passcode",id:"passcode_1",type:"text",placeholder:"1",maxLength:"1",onKeyUp:this.handleCode}),l.a.createElement(R.a.Feedback,null)),l.a.createElement(f.a,{md:2},l.a.createElement(R.a,{className:"passcode",id:"passcode_2",type:"text",placeholder:"2",maxLength:"1",onKeyUp:this.handleCode}),l.a.createElement(R.a.Feedback,null)),l.a.createElement(f.a,{md:2},l.a.createElement(R.a,{className:"passcode",id:"passcode_3",type:"text",placeholder:"3",maxLength:"1",onKeyUp:this.handleCode}),l.a.createElement(R.a.Feedback,null)),l.a.createElement(f.a,{md:2},l.a.createElement(R.a,{className:"passcode",id:"passcode_4",type:"text",placeholder:"4",maxLength:"1",onKeyUp:this.handleCode}),l.a.createElement(R.a.Feedback,null)),l.a.createElement(f.a,{md:2},l.a.createElement(R.a,{className:"passcode",id:"passcode_5",type:"text",placeholder:"5",maxLength:"1",onKeyUp:this.handleCode}),l.a.createElement(R.a.Feedback,null)),l.a.createElement(f.a,{md:2},l.a.createElement(R.a,{className:"passcode",id:"passcode_6",type:"text",placeholder:"6",maxLength:"1",onKeyUp:this.handleCode}),l.a.createElement(R.a.Feedback,null))),l.a.createElement("div",{id:"warningText_3"},"Invalid Verification Code")),l.a.createElement("div",null,"I didn't receive a code! ",l.a.createElement("span",{id:"resend",onClick:this.resendVerificationCode},"Resend")),l.a.createElement("div",{id:"warningText_2"},"Password is not match"),l.a.createElement(A.a,null,l.a.createElement(M.a,{className:"pwd_label"},"New Password"),l.a.createElement(y.a,null,l.a.createElement(f.a,{md:12},l.a.createElement(R.a,{className:"inputText",id:"pwd_inputText",type:"password",onKeyUp:this.checkPasswordPolicy,onChange:this.handleChangeNewPassword}),l.a.createElement(R.a.Feedback,null))),l.a.createElement("br",null),l.a.createElement(M.a,{className:"pwd_label"},"Confirm Password"),l.a.createElement(y.a,null,l.a.createElement(f.a,{md:12},l.a.createElement(R.a,{className:"inputText",id:"con_pwd_inputText",type:"password",onKeyUp:this.checkConfirmPassword}),l.a.createElement(R.a.Feedback,null)))))),l.a.createElement(j.a.Footer,null,l.a.createElement(_.a,{onClick:this.handleClose,id:"pwd_button_sec"},"Close"),l.a.createElement(_.a,{onClick:this.handleSend,id:"pwd_button_pri"},"Send")))))}}]),t}(s.Component),K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={show:!1,forgotpwd_username:"",forgotpwd_password:"",forgotpwd_user_ok:!1,codemistmatch:!1,usernotfound:!1,LimitExceeded:!1},a.handleSend=function(){console.log("hello"),N(a.state.forgotpwd_username,function(e,t,n,o){e&&(console.log(e.code),"LimitExceededException"===e.code?(a.showVerificationModal(!1),a.setState({LimitExceeded:!0})):"CodeMismatchException"===e.code?a.v.handleShow(!1):a.showVerificationModal(!1),console.log(n)),e||"undefined"===typeof t||(console.log("Result:",t),a.setState({cognitoUser:n,sth:o}),a.showVerificationModal(!0))})},a.showVerificationModal=function(e){console.log(e),!1===e?a.setState({usernotfound:!0}):(a.v.handleShow(!0),a.handleClose())},a.getCode=function(e){a.setState({verficationCode:e},function(){console.log(this.state.verficationCode),console.log(this.state.cognitoUser),U(this.state.verficationCode,this.state.forgotpwd_password,this.state.cognitoUser,this.state.sth),this.v.handleClose()})},a.handleChangeUsername=function(e){a.setState({forgotpwd_username:e.target.value})},a.handleChangeNewPassword=function(e){a.setState({forgotpwd_password:e.target.value})},a.handleClose=function(){a.setState({show:!1}),a.setState({usernotfound:!1}),a.setState({LimitExceeded:!1})},a.handleShow=function(){a.setState({show:!0})},a}return Object(p.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this,t=l.a.createElement(F,{getCode:this.getCode,handleChangeNewPassword:this.handleChangeNewPassword,handleSend:this.handleSend,ref:function(t){return e.v=t}});return l.a.createElement("div",{className:"pwd_bg"},l.a.createElement("div",{id:"verification_modal"},t),l.a.createElement(j.a,{show:this.state.show,onHide:this.handleClose,className:"pwd_bg",id:"forgotpwd_modal"},l.a.createElement("div",{className:"modal-content forgotpwd_modal"},l.a.createElement(j.a.Header,null,l.a.createElement(j.a.Title,{id:"forgotpwd_title"},"Forgot your password?")),l.a.createElement(j.a.Body,null,l.a.createElement("div",{id:"pwdPolicy"},"Enter your username below ",l.a.createElement("br",null),"and we'll get you back on track ",l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement("form",null,l.a.createElement(A.a,null,l.a.createElement(M.a,{className:"pwd_label"},"Username"),l.a.createElement(R.a,{className:"inputText",id:"pwd_inputText",type:"text",value:this.state.value,onChange:this.handleChangeUsername}),l.a.createElement(R.a.Feedback,null))),this.state.usernotfound&&l.a.createElement("div",{className:"text-danger"},"Invalid Username/Email or Password"),this.state.LimitExceeded&&l.a.createElement("div",{className:"text-danger"},"Please try again later.")),l.a.createElement(j.a.Footer,null,l.a.createElement(_.a,{onClick:this.handleClose,id:"pwd_button_sec"},"Close"),l.a.createElement(_.a,{onClick:this.handleSend,id:"pwd_button_pri"},"Send")))))}}]),t}(s.Component),V=a(539),H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={error:!1,showPassword:!1,show:!1,Password:"",ConfirmPassword:"",save:!1,require:"",usernameValue:"",passwordValue:"",forgotPassword:!1},a.componentDidMount=function(){console.log(Object(h.a)(a)),""!==a.props.username&&a.props.rememberMe?(console.log("THIS IS USERNAME ",a.props.username),a.usernameInput.value=a.props.username,a.passwordInput.value=a.props.password):console.log("NOTHING"),""!==a.props.idToken&&a.props.history.push(a.props.currentPage),a.authorizeUserPool=a.authorizeUserPool.bind(Object(h.a)(a)),a.rememberMe=a.rememberMe.bind(Object(h.a)(a)),a.handleChangePassword=a.handleChangePassword.bind(Object(h.a)(a)),a.handleChangeConfirmPassword=a.handleChangeConfirmPassword.bind(Object(h.a)(a)),a.handleSave=a.handleSave.bind(Object(h.a)(a))},a.onUsernameChange=function(){a.setState({usernameValue:a.usernameInput.value})},a.onPasswordChange=function(){a.setState({passwordValue:a.passwordInput.value})},a.authUser=function(e,t){P(e,t,function(e,t,n,o){e?"UserNotFoundException"!==e.code&&"NotAuthorizedException"!==e.code&&"InvalidParameterException"!==e.code&&"UserNotFoundException"!==e.code||a.setState({error:!0}):("undefined"!==typeof n&&a.setState({require:n,cognitoUser:o,result:t},a.requireNewPassword()),a.setState({idToken:t.getIdToken().getJwtToken()}),a.authorizeUserPool(t))})},a.checkLogin=function(e){e.preventDefault(),console.log("test"+a.usernameInput.value),a.authUser(a.usernameInput.value,a.passwordInput.value)},a.authorizeUserPool=function(e){g.a.get(V.webUserManagment+a.usernameInput.value,{headers:{idToken:e.getIdToken().getJwtToken()}}).then(function(t){var n="";t.data.response.productRoles.map(function(e){"aurora"===e.productName&&(n=e.roleName)}),a.props.setUserInfo(t.data.response.productRoles,"aurora",n,t.data.response.allUsers,t.data.response.userInformation),a.props.setIDToken(e.getIdToken().getJwtToken(),a.usernameInput.value,a.props.rememberMe?a.passwordInput.value:null),""===a.props.currentPage?a.props.history.push("/dashboard"):a.props.history.push(a.props.currentPage)}).catch(function(e){throw e})},a.handleChangePassword=function(e){return a.setState({Password:e.target.value})},a.handleChangeConfirmPassword=function(e){return a.setState({ConfirmPassword:e.target.value})},a.handleSave=function(){console.log("STATE:",a.state),a.n.handleClose(),B(a.usernameInput.value,a.passwordInput.value,a.state.ConfirmPassword,a.state.require,a.state.cognitoUser,function(e,t){e&&alert(e.code),a.setState({idToken:t.getIdToken().getJwtToken()}),a.authorizeUserPool(t)})},a.handleChangeUsername=function(e){return a.setState({forgotpwd_username:e.target.value})},a.handleChangeNewPassword=function(e){return a.setState({forgotpwd_password:e.target.value})},a.handleSend=function(){N(a.state.forgotpwd_username,function(e,t){if(e)return a.setState({forgotpwd_user_ok:!1},a.f.test()),void alert(e);"undefined"!==typeof t&&alert(t.message),a.setState({forgotpwd_user_ok:!0},a.f.test())})},a.rememberMe=function(e){return a.props.setRememberMe(e.target.checked)},a.requireNewPassword=function(){return a.n.handleShow()},a.forgotPassword=function(){return a.f.handleShow()},a.render=function(){var e=a.state.usernameValue.length>0&&a.state.passwordValue.length>0||a.props.username.length>0,t=l.a.createElement(L,{handleChangePassword:a.handleChangePassword,handleChangeConfirmPassword:a.handleChangeConfirmPassword,handleSave:a.handleSave,ref:function(e){return a.n=e}}),n=l.a.createElement(K,{handleChangeNewPassword:a.handleChangeNewPassword,handleSaveChangePassword:a.handleSaveChangePassword,handleSend:a.handleSend,handleChangeUsername:a.handleChangeUsername,forgotpwd_user_ok:a.state.forgotpwd_user_ok,ref:function(e){return a.f=e}});return l.a.createElement("div",null,l.a.createElement("div",{id:"login_modal"},t,n),l.a.createElement("div",{id:"login-background"}),l.a.createElement("div",{id:"login-form"}),l.a.createElement(y.a,{className:"signinWrap",style:{paddingLeft:"10px"}},l.a.createElement(f.a,{xs:12,sm:12,md:7,lg:8},l.a.createElement(y.a,null,l.a.createElement(f.a,{xs:12},l.a.createElement("h1",null,"AURORA"),l.a.createElement("h5",{className:"text-uppercase color-green"},"Framework 0.1"))),l.a.createElement(y.a,null,l.a.createElement(f.a,{xs:12,sm:12,md:6},l.a.createElement(b.a,{className:"shadow-sm"},l.a.createElement(E.a,{url:"https://www.youtube.com/embed/cggc8kNll2M",width:"100%",height:"450px",id:"myId",className:"myClassname",display:"initial",position:"relative"}),l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,"Card Title"),l.a.createElement(b.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),l.a.createElement(_.a,{variant:"",className:"text-uppercase background-green"},"Join now")))),l.a.createElement(f.a,{xs:12,sm:12,md:6},l.a.createElement(b.a,{className:"shadow-sm"},l.a.createElement(E.a,{url:"https://www.youtube.com/embed/4nfWhWEy2Hc",width:"100%",height:"450px",id:"myId",className:"myClassname",display:"initial",position:"relative"}),l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,"Card Title"),l.a.createElement(b.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),l.a.createElement(_.a,{variant:"",className:"text-uppercase background-green"},"Join now")))))),l.a.createElement(f.a,{xs:12,sm:12,md:5,lg:4,className:"loginPanel d-flex"},l.a.createElement(C.a,{id:"login-inputForm",className:"m-auto form-login",style:{maxWidth:"350px",width:"80%"}},l.a.createElement(C.a.Label,{id:"login-title",className:"text-uppercase"},"Sign in to AURORA"),l.a.createElement("br",null),l.a.createElement("p",{className:"text-uppercase"},l.a.createElement("small",null,"Enter your detail below")),a.state.error&&l.a.createElement("div",{className:"alert alert-danger"},"Invalid Username/Email or Password"),l.a.createElement(C.a.Group,{className:"login-inputbox text-left"},l.a.createElement(C.a.Label,null,"Username"),l.a.createElement(C.a.Control,{type:"text",placeholder:"Username",ref:function(e){return a.usernameInput=e},id:"username",onKeyDown:a.getUsername,onChange:a.onUsernameChange,defaultValue:a.state.usernameValue})),l.a.createElement(C.a.Group,{className:"login-inputbox"},l.a.createElement(y.a,null,l.a.createElement(f.a,{className:"text-left"},l.a.createElement(C.a.Label,null,"Password")),l.a.createElement(f.a,null,l.a.createElement("button",{type:"button",className:"btn btn-link color-green",onClick:a.forgotPassword},"Forgot Password?"))),l.a.createElement(C.a.Control,{type:"password",placeholder:"Password",ref:function(e){return a.passwordInput=e},id:"password",onKeyDown:a.getPassword,onChange:a.onPasswordChange,defaultValue:a.state.passwordValue})),l.a.createElement(C.a.Row,{as:"div"},l.a.createElement(C.a.Check,{type:"checkbox",label:"Remember Me",onChange:a.rememberMe,defaultChecked:a.props.rememberMe,id:"rememberMe"})),l.a.createElement("br",null),l.a.createElement(C.a.Row,{as:"div"},l.a.createElement(_.a,{variant:"",disabled:!e,onClick:a.checkLogin,className:"center background-green text-uppercase",id:"login-button"}," Signin "))))))},a}return Object(p.a)(t,e),t}(s.Component),z=Object(v.b)(function(e){var t=e.sessionReducer;return{username:t.username,idToken:t.idToken,rememberMe:t.rememberMe,password:t.password,currentPage:t.currentPage}},function(e){return{setUserInfo:function(t,a,n,o,r){return e(function(e,t,a,n,o){return{type:"SET_USER_INFO",productRoles:e,productName:t,roleName:a,allUsers:n,userInformation:o}}(t,a,n,o,r))},setIDToken:function(t,a,n){return e(function(e,t,a){return{type:"SET_CREDENTIALS",idToken:e,username:t,password:a}}(t,a,n))},setRememberMe:function(t){return e(function(e){return{type:"REMEMBER_ME",rememberMe:e}}(t))}}})(H),D=a(35),q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={collapsed:!1},a.componentDidMount=function(){console.log(a.props),a.props.saveCookie("username",a.props.username)},a.onCollapse=function(e){console.log(e),a.setState({collapsed:e})},a.render=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Dashboard"),l.a.createElement("h2",null,a.props.productName),l.a.createElement("h2",null,a.props.userInformation.username),l.a.createElement("button",null," ",l.a.createElement("a",{href:D.products[0].url,target:"_self",onClick:function(){return a.props.saveCookie("role",a.props.roleName)}},"MEDIA SUITE")))},a}return Object(p.a)(t,e),t}(s.Component),J=Object(v.b)(function(e){var t=e.sessionReducer;return{productRoles:t.productRoles,productName:t.productName,roleName:t.roleName,allUsers:t.allUsers,userInformation:t.userInformation,username:t.username,idToken:t.idToken}},function(e){return{}})(q),W=(s.Component,a(123)),G=a(28),Y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return l.a.createElement(W.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(G.c,null,l.a.createElement(G.a,{path:"/dashboard",render:function(e){return l.a.createElement(J,Object.assign({},e,{saveCookie:a.props.saveCookie,loadCookie:a.props.loadCookie}))}}),l.a.createElement(G.a,{path:"/",component:z}),l.a.createElement(G.a,{component:z}))))},a}return Object(p.a)(t,e),t}(s.Component),Q=a(125),Z=a(24),$=a(71),X=a(126),ee=a.n(X),te=a(46),ae={username:"",idToken:"",password:"",rememberMe:"",userId:"",dbName:"",companyName:"",currentPage:"",productRoles:"",productName:"",roleName:"",allUsers:""};var ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CREDENTIALS":return e=Object(te.a)({},e,{idToken:t.idToken,username:t.username,password:null===t.password?e.password:t.password});case"REMEMBER_ME":return Object(te.a)({},e,{rememberMe:t.rememberMe});case"SET_USER_INFO":return console.log(t),Object(te.a)({},e,{productRoles:t.productRoles,productName:t.productName,roleName:t.roleName,allUsers:t.allUsers,userInformation:t.userInformation});case"CHANGE_PAGE":return Object(te.a)({},e,{currentPage:t.currentPage});default:return e}},oe=Object(Z.b)({sessionReducer:ne}),re={key:"root",storage:ee.a},se=Object($.a)(re,oe),le=function(){var e=Object(Z.c)(se);return{store:e,persistor:Object($.b)(e)}},de=a(35),ce=a(543).CrossStorageClient;console.log(de.aurora_url+"/hub.html");var ie=new ce(de.aurora_url+"/hub.html");function ue(){return(ue=Object(r.a)(o.a.mark(function e(t){var a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){return ie.get(t)},e.next=3,ie.onConnect().then(a).then(function(e){return n=e}).catch(function(e){throw e});case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}c.a.render(l.a.createElement(v.a,{store:le().store},l.a.createElement(Q.a,{loading:null,persistor:le().persistor},l.a.createElement(Y,{saveCookie:function(e,t){ie.onConnect().then(function(){return ie.set(e,t)}).catch(function(e){throw e})},loadCookie:function(e){return ue.apply(this,arguments)}}))),document.getElementById("root"))},60:function(e,t){}},[[127,1,2]]]);
//# sourceMappingURL=main.2c296449.chunk.js.map