import {Component} from 'react';
import {handleAuthCallback} from "../service/AuthService"

class AuthCallback extends Component {

    componentDidMount() {
        handleAuthCallback();
        window.location.href = "/";
    }

    render() {
        return null;
    }
}

export default AuthCallback;