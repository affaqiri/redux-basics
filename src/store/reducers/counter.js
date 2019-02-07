import * as actionTypes from '../actions/actionTypes';

const initialState = {
    counter: 0
}

const counterReducer = (state=initialState, action) => {
    switch ( action.type ) {
        case actionTypes.INCREMENT:
            // One way but still not a deep clone, just first level clone
            //const newState = Object.assign({}, state);
            //newState.counter = state.counter + 1;
            //return newState;
            return {
                ...state,  // better way with spread operator
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
    }
    
    return state;
}

export default counterReducer; 