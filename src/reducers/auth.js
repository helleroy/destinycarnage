import { LOG_IN, LOG_OUT } from "../actions/auth";

const auth = (state = {
    loggedIn: false
}, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                loggedIn: true
            };
        case LOG_OUT:
            return {
                ...state,
                loggedIn: false
            };
        default:
            return state;
    }
};

export default auth;