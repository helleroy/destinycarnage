import type { Action } from "../types/actions";
import type { State } from "../types/app";

const userData = (state: State = null, action: Action): State => {
    switch (action.type) {
        case 'RECEIVE_USER_DATA':
            switch (action.status) {
                case 'success':
                    return {
                        ...state,
                        userData: action.data
                    };
                default:
                    return state;
            }
        default:
            return state;
    }
};

export default userData;
