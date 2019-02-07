export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
  return {
    type: INCREMENT
  };
}

export const decrement = () => {
  return {
    type: DECREMENT
  };
}

export const add = value => {
  return {
    type: ADD,
    value: value
  };
}

export const subtract = value => {
  return {
    type: SUBTRACT,
    value: value
  };
}

export const storeResult = res => {
  return {
    type: STORE_RESULT,
    result: res
  };
}

// These Async actions never get to the reducers because the reducers expects only Sync actions
// They just allow us to delay the execution of a normal sync actionCreator by way of the thunk middleware
export const storeResultAsync = res => {
  // Redux Thank passes the dispatch function implicitly
  // It is a middleware and therefore can change existing actions and introduce delays before dispatching back the same action
  return dispatch => {
    setTimeout(() => {
      dispatch(storeResult(res));
    }, 2000);
  }
}

export const deleteResult = resEltId => {
  return {
    type: DELETE_RESULT,
    resultElementId: resEltId
  };
}