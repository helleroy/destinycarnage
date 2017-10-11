import {CLIENT_ID} from "../configuration/config";

const LOCAL_STORAGE_AUTH_TOKEN = "authToken";
const LOCAL_STORAGE_STATE_TOKEN = "stateToken";
const BUNGIE_AUTH_URL = `https://www.bungie.net/en/oauth/authorize?client_id=${CLIENT_ID}&response_type=code`;
const BUNGIE_TOKEN_URL = "https://www.bungie.net/platform/app/oauth/token/";

export const login = () => {
    const stateToken = Math.random().toString(36).slice(2);
    localStorage.setItem(LOCAL_STORAGE_STATE_TOKEN, stateToken);
    window.location.href = BUNGIE_AUTH_URL + `&state=${stateToken}`;
};

export const logout = () => {
    clearAuthToken();
};

export const isLoggedIn = () => {
    const authToken = getAuthToken();
    return !!authToken && !isTokenExpired(authToken);
};

export const getAuthToken = () => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN));
};

export const handleAuthCallback = async () => {
    const url = new URL(window.location.href);

    const state = url.searchParams.get("state");

    if (state !== localStorage.getItem(LOCAL_STORAGE_STATE_TOKEN)) {
        console.error("State parameter did not match submitted state token. Possible CSRF attack or other shenanigans");
        return;
    }

    const authCode = url.searchParams.get("code");

    const authToken = await exchangeCodeForToken(authCode);

    const now = new Date();
    const timestampedAuthToken = {
        ...authToken,
        notAfter: now.setSeconds(now.getSeconds() + authToken.expires_in)
    };

    localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, JSON.stringify(timestampedAuthToken));
};

const clearAuthToken = () => {
    localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN);
};

const isTokenExpired = (authToken) => {
    return authToken.notAfter < new Date();
};

const exchangeCodeForToken = async (authCode) => {
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
            const authToken = response.json();
            console.log("Received auth token", authToken);
            return authToken;
        } else {
            console.error(`Failed to fetch auth token. Got response code: ${response.status}`)
        }
    } catch (e) {
        console.error("Failed to fetch auth token", e);
    }
};
