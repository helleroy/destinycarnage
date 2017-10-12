import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from "../services/AuthService";
import { fetchProxyData } from "../actions/actions";

class ProxyCaller extends Component {

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
                            <input type="button" value="Call API" onClick={() => fetchProxyData(this.state.url)}/>
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

const mapStateToProps = state => {
    return {
        auth: state.auth,
        data: state.bungieData.data
    }
};

export default connect(mapStateToProps)(ProxyCaller);
