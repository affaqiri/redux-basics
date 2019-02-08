import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utility";

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
      return updateObject(state, { counter: state.counter + 1 })  
    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 })
    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + action.value })
    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.value })
  }
  
  return state;
}

export default counterReducer;
