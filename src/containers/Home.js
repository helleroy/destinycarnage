import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from "../services/AuthService";
import { fetchData } from "../actions/actions";
import UserCard from '../components/UserCard';

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
                        <UserCard bungieNetUser={this.props.data.bungieNetUser}
                                  destinyMemberships={this.props.data.bungieNetUser}/>
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
        data: state.bungieData
    }
};

export default connect(mapStateToProps)(Home);
