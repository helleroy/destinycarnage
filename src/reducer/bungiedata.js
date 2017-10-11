import { FETCH_DATA } from "../action/actions";

const bungieDate = (state = {}, action) => {
    switch (action.type) {
        case FETCH_DATA:
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

export default bungieDate;
