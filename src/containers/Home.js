import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from "../services/AuthService";
import { fetchData } from "../actions/actions";
import DataDump from "../components/DataDump";

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

const mapStateToProps = state => {
    return {
        auth: state.auth,
        data: state.bungieData.data,
        userData: state.userData
    }
};

export default connect(mapStateToProps)(Home);
