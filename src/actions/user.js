import { getClansForMember, getMembershipsForCurrentUser } from "../services/BungieApi";

export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';

const receiveUserData = (data) => ({
    type: RECEIVE_USER_DATA,
    status: 'success',
    data: data
});

export const fetchUserData = () => async dispatch => {
    const memberships = await getMembershipsForCurrentUser();

    const membershipsWithClans = await Promise.all(
        memberships.destinyMemberships.map(async destinyMembership => {
            const response = await getClansForMember(destinyMembership);
            return {
                membership: destinyMembership,
                clans: response.results
            }
        }));

    dispatch(receiveUserData(membershipsWithClans));
};