import {TYPE_DECREMENT, TYPE_INCREMENT} from "../actions/incDecActions";


const initialState = {
    value : 0,
};


export default function (state = initialState, action) {
    switch (action.type) {
        case TYPE_INCREMENT:
            return {
                ...state,
                value : state.value + 1,
            }
        case TYPE_DECREMENT:
            return {
                ...state,
                value : state.value - 1,
            }
        default : return state;
    }
}
