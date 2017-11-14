// @flow
import { getMembershipsForCurrentUser, proxyCall } from '../services/BungieApi';
import type { Dispatch, PromiseAction, ReceiveDataAction, ReceiveProxyDataAction, ThunkAction } from "../types/actions";

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

export const fetchData = (): ThunkAction => (dispatch: Dispatch): PromiseAction => {
    return getMembershipsForCurrentUser()
        .then(response => dispatch(receiveData(response)));
};

export const fetchProxyData = (url: string): ThunkAction => (dispatch: Dispatch): PromiseAction => {
    return proxyCall(url)
        .then(response => dispatch(receiveProxyData(response)));
};
