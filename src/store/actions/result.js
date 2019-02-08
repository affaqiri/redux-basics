import * as actionTypes from "./actionTypes";

// In actionCreators we can have transformation logic before passing it as action to the reducer
// We can also do the same transformation also in the reducer
// So where we should do?
// Some people prefer to put the transformation logic in the reducer itself because reducers should update the state at the end
// and better to keep it consistent but any asyc code should always go in the action creator
export const storeResult = res => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
}

// These Async actions never get to the reducers because the reducers expects only Sync actions
// They just allow us to delay the execution of a normal sync actionCreator by way of the thunk middleware
// Instead of setTimeout we would usually call an http endpoint for example
export const storeResultAsync = res => {
  // Redux Thank passes the dispatch function implicitly
  // It is a middleware and therefore can change existing actions and introduce delays before dispatching back the same action
  // getState is also passed by redux-thunk like dispatch
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