import React, {Component} from 'react';

const ANTI_CSRF = "6i0mkLx79Hp91nzWVeHrzHG4";
const CLIENT_ID = "21820";
const BUNGIE_AUTH_URL = `https://www.bungie.net/en/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&state=${ANTI_CSRF}`;
const BUNGIE_TOKEN_URL = "https://www.bungie.net/platform/app/oauth/token/";
const LOCAL_STORAGE_AUTH_TOKEN = "authToken";

class Auth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
        }
    }

    componentDidMount() {
        const locationURL = new URL(window.location.href);
        const authCode = locationURL.searchParams.get("code");

        if (authCode !== null) {

            const authToken = this.getAuthToken(authCode);

            const now = new Date();
            const timestampedAuthToken = {
                ...authToken,
                notAfter: now.setSeconds(now.getSeconds() + authToken.expires_in)
            };

            window.localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, JSON.stringify(timestampedAuthToken));

            this.setState({loggedIn: true, authToken: timestampedAuthToken});

            for (let param of locationURL.searchParams) {
                locationURL.searchParams.delete(param[0]);
            }
            window.location.href = locationURL;
        } else {
            const localAuthToken = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN));

            if (localAuthToken !== null && new Date() <= localAuthToken.notAfter) {
                this.setState({loggedIn: true, authToken: localAuthToken});
            }
        }
    }

    async getAuthToken(authCode) {
        const headers = new Headers();
        headers.set("Content-Type", "application/x-www-form-urlencoded");

        const body = new URLSearchParams();
        body.set("grant_type", "authorization_code");
        body.set("client_id", CLIENT_ID);
        body.set("code", authCode);

        let init = {
            method: "POST",
            headers: headers,
            mode: "cors",
            body: body
        };

        try {
            console.log("Fetching auth token for auth code ", authCode);

            const response = await fetch(BUNGIE_TOKEN_URL, init);

            if (response.ok) {
                console.log("Received auth token", response.json());
            } else {
                console.error(`Failed to fetch auth token. Got response code: ${response.status}`)
            }
        } catch (e) {
            console.error("Failed to fetch auth token", e);
        }
    }

    render() {
        if (this.state.loggedIn) {
            return (
                <div>
                    <p>You are logged in!</p>
                </div>
            );
        }

        return (
            <div>
                <a href={BUNGIE_AUTH_URL}>Log in to Destiny</a>
            </div>
        );
    }
}

export default Auth;