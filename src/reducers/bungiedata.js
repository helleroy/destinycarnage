import { RECEIVE_DATA } from "../actions/actions";

const bungieData = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_DATA:
            switch (action.status) {
                case 'success':
                    return {
                        ...state,
                        data: action.data
                    };
                default:
                    return state;
            }
        default:
            return state;
    }
};

export default bungieData;
