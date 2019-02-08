import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utility";

const initialState = {
    results: []
}

const resultReducer = (state=initialState, action) => {
    switch ( action.type ) {
      case actionTypes.STORE_RESULT: 
        // we must us concat instead of push for immutability
        return updateObject(state, { results: state.results.concat({id: new Date(), value: action.result}) })
      case actionTypes.DELETE_RESULT:
        // state.results.splice(2, 1); not immutable way so should be avoided
        //newResults = [...state.results]; // this is one method
        //newResults.splice(2, 1);
        const updatedResults = state.results.filter(result => result.id !== action.resultElementId);
        return updateObject(state, { results: updatedResults })
    }
    
    return state;
}

export default resultReducer;