// @flow
import { getMembershipsForCurrentUser, proxyCall } from '../services/BungieApi';
import type { ReceiveDataAction, ReceiveProxyDataAction, ThunkAction } from "../types/actions";

const receiveData = (data: Object): ReceiveDataAction => {
    return {
        type: 'RECEIVE_DATA',
        status: 'success',
        data
    }
};

const receiveProxyData = (data: Object): ReceiveProxyDataAction => ({
    type: 'RECEIVE_PROXY_DATA',
    status: 'success',
    data
});

export const fetchData = (): ThunkAction => (dispatch: Function) => {
    return getMembershipsForCurrentUser()
        .then(response => dispatch(receiveData(response)));
};

export const fetchProxyData = (url: string): ThunkAction => (dispatch: Function) => {
    return proxyCall(url)
        .then(response => dispatch(receiveProxyData(response)));
};
