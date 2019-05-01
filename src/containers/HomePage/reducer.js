import { HOME_ACTION_TYPE } from './action';

const initialState = {
    exampleData: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case HOME_ACTION_TYPE.LOAD_DATA: {
            return {
                ...state,
                exampleData: action.payload
            };
        }

        case HOME_ACTION_TYPE.LOAD_DATA_SUCCESSFULLY: {
            console.log(action);
            return {
                ...state,
                exampleData: action.data
            };
        }

        default:
            return state;
    }
}
