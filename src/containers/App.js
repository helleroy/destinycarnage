import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import Home from './Home';
import Nav from '../components/Nav'
import AuthCallback from './AuthCallback';
import { isLoggedIn } from "../services/AuthService";
import { setLoggedIn, setLoggedOut } from "../actions/auth";
import logo from '../logo.svg';
import '../App.css';

class App extends Component {

    componentDidMount() {
        if (isLoggedIn()) {
            this.props.dispatch(setLoggedIn());
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <Nav loggedIn={this.props.loggedIn}
                             logout={() => this.props.dispatch(setLoggedOut())}/>

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

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    };
};

export default connect(mapStateToProps)(App);
