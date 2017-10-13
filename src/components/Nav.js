// @flow
import React, { Component } from 'react';

type Props = {
    logout: Function
}

class Nav extends Component<Props> {

    render() {
        return (
            <nav>
                {this.props.loggedIn ?
                    <input type="button" value="Log out" onClick={this.props.logout}/>
                    : null}
            </nav>
        );
    }
}

export default Nav;
