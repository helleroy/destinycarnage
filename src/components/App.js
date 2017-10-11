import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Home';
import AuthCallback from './AuthCallback';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <Route path="/" component={Home}/>
                    <Route path="/auth" component={AuthCallback}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
