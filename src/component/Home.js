import React, { Component } from 'react';
import { isLoggedIn, login } from "../service/AuthService"
import { getMembershipsForCurrentUser } from "../service/BungieApi";


class Home extends Component {

    render() {

        return (
            <div>
                {
                    isLoggedIn() ?
                        <div>
                            <h2>Welcome!</h2>
                            <p>You are logged in</p>
                            <h2>Here's some data</h2>
                            <p>{getMembershipsForCurrentUser()}</p>
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