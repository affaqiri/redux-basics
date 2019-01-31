// Redux with only NodeJS (No React involved)
const redux = require('redux');
const createStore = redux.createStore;  // not executed

// Our global state object
const initialState = {
    counter: 0
}

// Reducer
// Changing the state inside the reducer should be immutable and not modify directly the passed state object
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    
    return state;
}

// Store (need to be initialized with a reducer)
const store = createStore(rootReducer);

console.log(store.getState());

// Subscription (used to be notified whenever the state is updated)
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action (type property is mandatory)
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});

console.log(store.getState());