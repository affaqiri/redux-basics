import * as actionTypes from '../store/actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state=initialState, action) => {
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
        case actionTypes.STORE_RESULT: 
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter}) // we must us concat instead of push for immutability
            }
        case actionTypes.DELETE_RESULT: 
            // state.results.splice(2, 1); not immutable way so should be avoided
            //newResults = [...state.results]; // this is one method
            //newResults.splice(2, 1);
            const updatedResults = state.results.filter(result => result.id !== action.resultElementId);
            return {
                ...state,
                results: updatedResults
            }
    }
    
    return state;
}

export default reducer;