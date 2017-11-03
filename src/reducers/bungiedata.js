import type { State } from "../types/app";
import type { Action } from "../types/actions";

const bungieData = (state: State = {}, action: Action): State => {
    switch (action.type) {
        case 'RECEIVE_DATA':
            switch (action.status) {
                case 'success':
                    return {
                        ...state,
                        randomData: action.data
                    };
                default:
                    return state;
            }
        case 'RECEIVE_PROXY_DATA':
            switch (action.status) {
                case 'success':
                    return {
                        ...state,
                        randomData: action.data
                    };
                default:
                    return state;
            }
        default:
            return state;
    }
};

export default bungieData;
