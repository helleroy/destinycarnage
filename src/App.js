import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Auth from './Auth';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <BrowserRouter>
                    <Route path="/" component={Auth}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
