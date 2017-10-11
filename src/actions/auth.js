import { logout } from "../services/AuthService";

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const setLoggedIn = () => ({
    type: LOG_IN
});

export const setLoggedOut = () => {
    logout();
    return {
        type: LOG_OUT
    }
};
