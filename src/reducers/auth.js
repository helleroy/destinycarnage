import type { State } from "../types/app";
import type { Action } from "../types/actions";

const auth = (state: State = { loggedIn: false }, action: Action): State => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                auth: { loggedIn: true }
            };
        case 'LOG_OUT':
            return {
                ...state,
                auth: { loggedIn: false }
            };
        default:
            return state;
    }
};

export default auth;