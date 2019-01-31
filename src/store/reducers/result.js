import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const resultReducer = (state=initialState, action) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT: 
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result}) // we must us concat instead of push for immutability
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

export default resultReducer;