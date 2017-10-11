import React, { Component } from 'react';
import { connect } from 'react-redux'
import { isLoggedIn, login } from "../service/AuthService"
import { fetchData } from "../action/actions";

class Home extends Component {

    componentDidMount() {
        if (isLoggedIn()) {
            this.props.dispatch(fetchData());
        }
    }

    render() {
        return (
            <div>
                {
                    isLoggedIn() ?
                        <div>
                            <h2>Welcome!</h2>
                            <p>You are logged in</p>
                            <h2>Here's some data</h2>
                            <p>{JSON.stringify(this.props.data)}</p>
                        </div> :
                        <div>
                            <p><input type="button" value="Log in to Destiny" onClick={login}/></p>
                        </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.bungieData
    }
};

export default connect(mapStateToProps)(Home);
