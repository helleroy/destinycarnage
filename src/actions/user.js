// @flow
import { getClansForMember, getMembershipsForCurrentUser } from "../services/BungieApi";
import type { DestinyUser } from "../types/app";
import type { UserMembership } from "../types/bungie-api";

export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';

const receiveUserData = (data: Array<DestinyUser>) => ({
    type: RECEIVE_USER_DATA,
    status: 'success',
    data: data
});

export const fetchUserData = () => async (dispatch: Function) => {
    const memberships: UserMembership = await getMembershipsForCurrentUser();

    const destinyUser: Array<DestinyUser> = await Promise.all(
        memberships.destinyMemberships.map(async destinyMembership => {
            const response = await getClansForMember(destinyMembership);
            return {
                membership: destinyMembership,
                clans: response.results
            }
        }));

    dispatch(receiveUserData(destinyUser));
};