import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import Home from './Home';
import AuthCallback from './AuthCallback';
import ProxyCaller from "./ProxyCaller";
import Nav from '../components/Nav'
import { isLoggedIn } from "../services/AuthService";
import { setLoggedIn, setLoggedOut } from "../actions/auth";
import '../App.css';

class App extends Component {

    constructor(props) {
        super(props);
        if (isLoggedIn()) {
            props.dispatch(setLoggedIn());
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <Nav loggedIn={this.props.loggedIn}
                             logout={() => this.props.dispatch(setLoggedOut())}/>

                        <h1 className="App-title">Destiny Carnage</h1>
                    </header>
                    <Route path="/" component={Home}/>
                    <Route path="/proxy" component={ProxyCaller}/>
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
