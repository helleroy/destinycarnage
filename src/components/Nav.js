import React, { Component } from 'react';

class Nav extends Component {

    render() {
        return (
            <nav>
                {this.props.loggedIn ? null :
                    <input type="button" value="Log out" onClick={this.props.logout}/>}
            </nav>
        );
    }
}

export default Nav;
