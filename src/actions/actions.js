import { getMembershipsForCurrentUser } from '../services/BungieApi';

export const RECEIVE_DATA = 'RECEIVE_DATA';

const receiveData = (data) => ({
    type: RECEIVE_DATA,
    status: 'success',
    data
});

export const fetchData = () => dispatch => {
    return getMembershipsForCurrentUser()
        .then(response => dispatch(receiveData(response)));
};
