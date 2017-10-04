import {getAuthToken, isLoggedIn, login} from "./AuthService"
import {API_KEY, BUNGIE_API_ROOT} from "../configuration/config";

export const getGroupsForMember = async () => {

    if (!isLoggedIn()) {
        login();
    }

    const membershipType = 2;
    const membershipId = getAuthToken().membership_id;
    const filter = 0;
    const groupType = 1;

    return await fetchFromBungie(`/GroupV2/User/${membershipType}/${membershipId}/${filter}/${groupType}/`, {method: "GET"})
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
    };

    try {
        console.log("Fetching resource from path ", path);

        const response = await
            fetch(BUNGIE_API_ROOT + path, init);

        if (response.ok) {
            const resource = response.json();
            console.log("Received resource", resource);
            return resource;
        } else {
            console.error(`Failed to fetch resource. Got response code: ${response.status}`)
        }
    } catch (e) {
        console.error("Failed to fetch resource", e);
    }
};
