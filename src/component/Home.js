import React, {Component} from 'react';
import {isLoggedIn, login} from "../service/AuthService"


class Home extends Component {

    render() {
        return (
            <div>
                {
                    isLoggedIn() ?
                        <div>
                            <p>You are logged in</p>
                        </div> :
                        <div>
                            <p><input type="button" value="Log in to Destiny" onClick={login}/></p>
                        </div>
                }
            </div>
        );
    }
}

export default Home;