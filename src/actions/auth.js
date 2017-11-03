// @flow
import { logout } from "../services/AuthService";
import type { LogInAction, LogOutAction } from "../types/actions";

export const setLoggedIn = (): LogInAction => ({
    type: 'LOG_IN'
});

export const setLoggedOut = (): LogOutAction => {
    logout();
    return {
        type: 'LOG_OUT'
    }
};
