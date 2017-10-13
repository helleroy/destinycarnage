// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from "../services/AuthService";
import { fetchProxyData } from "../actions/actions";
import type { Auth, State } from "../types/app";

type Props = {
    auth: Auth,
    data: Object,
    dispatch: Function
}

type LocalState = {
    url: string
}

class ProxyCaller extends Component<Props, LocalState> {

    constructor(props) {
        super(props);
        this.state = { url: '' };
    }

    render() {
        return (
            <div>
                {
                    this.props.auth.loggedIn ?
                        <div>
                            <input type="text"
                                   placeholder="Enter url to Bungie API"
                                   value={this.state.url}
                                   onInput={(event) => this.setState({ url: event.target.value })}/>
                            <input type="button"
                                   value="Call API"
                                   onClick={() => this.props.dispatch(fetchProxyData(this.state.url))}/>
                            <div>
                                {JSON.stringify(this.props.data)}
                            </div>
                        </div>
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
    }
};

export default connect(mapStateToProps)(ProxyCaller);
