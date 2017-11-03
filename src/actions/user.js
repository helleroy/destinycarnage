// @flow
import { getClansForMember, getMembershipsForCurrentUser } from "../services/BungieApi";
import type { DestinyUser, User } from "../types/app";
import type { UserMembership } from "../types/bungie-api";
import type { ReceiveUserDataAction, ThunkAction } from "../types/actions";

const receiveUserData = (data: User): ReceiveUserDataAction => ({
    type: 'RECEIVE_USER_DATA',
    status: 'success',
    data: data
});

export const fetchUserData = (): ThunkAction => async (dispatch: Function) => {
    const memberships: UserMembership = await getMembershipsForCurrentUser();

    const destinyUsers: Array<DestinyUser> = await Promise.all(
        memberships.destinyMemberships.map(async destinyMembership => {
            const response = await getClansForMember(destinyMembership);
            return {
                membership: destinyMembership,
                clans: response.results
            }
        }));

    dispatch(receiveUserData({
        bungieNetUser: memberships.bungieNetUser,
        destinyUsers: destinyUsers
    }));
};