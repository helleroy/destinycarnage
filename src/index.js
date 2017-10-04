import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const ANTI_CSRF = "6i0mkLx79Hp91nzWVeHrzHG4";
const CLIENT_ID = "21820";

const authCode = new URL(window.location.href).searchParams.get("code");

if (authCode === null) {
    window.location.href = `https://www.bungie.net/en/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&state=${ANTI_CSRF}`;
}

getAuthToken(authCode);

async function getAuthToken(authCode) {
    const headers = new Headers();
    headers.set("Authorization", `Basic ${authCode}`);
    headers.set("Content-Type", "application/x-www-form-urlencoded");

    const body = new URLSearchParams();
    body.set("grant_type", "authorization_code");
    body.set("code", authCode);

    let init = {
        method: "POST",
        headers: headers,
        mode: "cors",
        body: body
    };

    try {
        console.log("Fetching auth token for auth code ", authCode);

        const response = await fetch("https://www.bungie.net/platform/app/oauth/token/", init);

        if (response.ok) {
            console.log("Received auth token", response.json());
        } else {
            console.error(`Failed to fetch auth token. Got response code: ${response.status}`)
        }
    } catch (e) {
        console.error("Failed to fetch auth token", e);
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
