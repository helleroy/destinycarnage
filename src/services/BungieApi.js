import { getAuthToken, isLoggedIn, login } from "./AuthService"
import { API_KEY, BUNGIE_API_ROOT } from "../configuration/config";

export const getClansForMember = async (member) => {

    if (!isLoggedIn()) {
        login();
    }

    return await fetchFromBungie(`/GroupV2/User/${member.membershipType}/${member.membershipId}/0/1/`, { method: "GET" })
};

export const getMembershipsForCurrentUser = async () => {

    if (!isLoggedIn()) {
        login();
    }

    return await fetchFromBungie('/User/GetMembershipsForCurrentUser/', { method: "GET" });
};

export const proxyCall = async (url) => {
    return await fetchFromBungie(url, { method: "GET" });
};

const fetchFromBungie = async (path, initAddons) => {

    if (!isLoggedIn()) {
        login();
    }

    const headers = new Headers();
    headers.set("Authorization", `Bearer ${getAuthToken().access_token}`);
    headers.set("X-API-Key", API_KEY);

    const init = {
        ...initAddons,
        headers: headers,
        mode: "cors"
    };

    try {
        console.log("Fetching resource from path ", path, init);

        const response = await fetch(BUNGIE_API_ROOT + path, init);

        if (response.ok) {
            const resource = await response.json();
            console.log("Received resource", resource);
            return resource.Response;
        } else {
            console.error(`Failed to fetch resource. Got response code: ${response.status}`)
        }
    } catch (e) {
        console.error("Failed to fetch resource", e);
        throw e;
    }
};
