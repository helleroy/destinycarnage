import { RECEIVE_USER_DATA } from "../actions/user";

const userData = (state, action) => {
    switch (action.type) {
        case RECEIVE_USER_DATA:
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

export default userData;
