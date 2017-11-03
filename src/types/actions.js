// @flow{
import type { State } from "./app";

export type ReceiveProxyDataAction = {
    type: 'RECEIVE_PROXY_DATA',
    status: FetchStatus,
    data: Object
}

export type ReceiveDataAction = {
    type: 'RECEIVE_DATA',
    status: FetchStatus,
    data: Object
}

export type ReceiveUserDataAction = {
    type: 'RECEIVE_USER_DATA',
    status: FetchStatus,
    data: Object
}

export type LogInAction = {
    type: 'LOG_IN'
}

export type LogOutAction = {
    type: 'LOG_OUT'
}

export type Action =
    | ReceiveDataAction
    | ReceiveProxyDataAction
    | ReceiveUserDataAction
    | LogInAction
    | LogOutAction;

export type FetchStatus = 'pending' | 'success' | 'failure'
export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
export type GetState = () => State;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
