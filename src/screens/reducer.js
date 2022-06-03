import { GET_DUMMY_DATA } from "./action";

const initialState = {
    dummyDataReduxState: {},

}

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DUMMY_DATA:
            return { ...state, dummyDataReduxState: action.data }
        default:
            return state;
    }
}

export default mainReducer;