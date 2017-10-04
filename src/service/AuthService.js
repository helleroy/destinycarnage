const ANTI_CSRF = "6i0mkLx79Hp91nzWVeHrzHG4";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const LOCAL_STORAGE_AUTH_TOKEN = "authToken";
const BUNGIE_AUTH_URL = `https://www.bungie.net/en/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&state=${ANTI_CSRF}`;
const BUNGIE_TOKEN_URL = "https://www.bungie.net/platform/app/oauth/token/";

export const login = () => {
    window.location.href = BUNGIE_AUTH_URL;
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
    const authCode = new URL(window.location.href).searchParams.get("code");

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
