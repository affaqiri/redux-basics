import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";

// decomposing the reducers per functionality
// each property consitutes a substate in the global state
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
})

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching]', action);
            // here we can change the action before passing it to the reducer
            // but we need to be careful with what we do to the state
            const result = next(action);   
            console.log('[Middleware] next state]', store.getState());
            return result;
        }
    }
}

// Configuring React Redux DevTools (checking whether __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ is available, otherwise fallback to default compose)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger))); // the second argument is an enhancer aka middleware

// Provider is a helper component that helps us inject the store to react components
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
