import React, { Component } from 'react';

class Nav extends Component {

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
