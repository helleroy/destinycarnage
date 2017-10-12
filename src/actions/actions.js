import { getMembershipsForCurrentUser, proxyCall } from '../services/BungieApi';

export const RECEIVE_DATA = 'RECEIVE_DATA';
export const RECEIVE_PROXY_DATA = 'RECEIVE_PROXY_DATA';

const receiveData = (data) => ({
    type: RECEIVE_DATA,
    status: 'success',
    data
});

const receiveProxyData = (data) => ({
    type: RECEIVE_PROXY_DATA,
    status: 'success',
    data
});

export const fetchData = () => dispatch => {
    return getMembershipsForCurrentUser()
        .then(response => dispatch(receiveData(response)));
};

export const fetchProxyData = (url) => dispatch => {
    return proxyCall(url)
        .then(response => dispatch(receiveProxyData(response)));
};
