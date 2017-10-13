// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from "../services/AuthService";
import DataDump from "../components/DataDump";
import { fetchUserData } from "../actions/user";
import type { Auth, DestinyUser, State } from "../types/app";

type Props = {
    auth: Auth,
    userData: Array<DestinyUser>,
    dispatch: Function
}

class Home extends Component<Props> {

    componentDidMount() {
        if (this.props.auth.loggedIn) {
            this.props.dispatch(fetchUserData());
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.auth.loggedIn ?
                        // <UserCard membershipData={this.props.data}/>
                        <DataDump data={this.props.userData}/>
                        : <div>
                            <input type="button" value="Log in to Destiny" onClick={() => login()}/>
                        </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state: State) => {
    return {
        auth: state.auth,
        userData: state.userData
    }
};

export default connect(mapStateToProps)(Home);
