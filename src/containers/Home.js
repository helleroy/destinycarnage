import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from "../services/AuthService";
import { fetchData } from "../actions/actions";

class Home extends Component {

    componentDidMount() {
        if (this.props.auth.loggedIn) {
            this.props.dispatch(fetchData());
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.auth.loggedIn ?
                        <div>
                            <h2>Welcome!</h2>
                            <p>You are logged in</p>
                            <h2>Here's some data</h2>
                            <p>{JSON.stringify(this.props.data)}</p>
                        </div> :
                        <div>
                            <p><input type="button" value="Log in to Destiny" onClick={() => login()}/>
                            </p>
                        </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        data: state.bungieData
    }
};

export default connect(mapStateToProps)(Home);
