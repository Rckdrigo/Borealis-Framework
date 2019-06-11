import React, {Component} from 'react';
import logo from './logo.svg';

import CookieReader from './CookieReader'

import './App.css';

class App extends Component {

    render = () => {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <CookieReader saveCookie={this.props.saveCookie} loadCookie={this.props.loadCookie}/>
                </header>
            </div>
        );
    }
}

export default App;
