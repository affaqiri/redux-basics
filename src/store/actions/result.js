import * as actionTypes from "./actionTypes";

export const storeResult = res => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
}

// These Async actions never get to the reducers because the reducers expects only Sync actions
// They just allow us to delay the execution of a normal sync actionCreator by way of the thunk middleware
export const storeResultAsync = res => {
  // Redux Thank passes the dispatch function implicitly
  // It is a middleware and therefore can change existing actions and introduce delays before dispatching back the same action
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().ctr.counter; // example of accessing the state using redux thunk but not a good practice and anyting we need should be passed as parameter
      console.log("Old counter value: " + oldCounter);
      dispatch(storeResult(res));
    }, 2000);
  }
}

export const deleteResult = resEltId => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElementId: resEltId
  };
}