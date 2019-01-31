import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
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

const store = createStore(rootReducer);

// Provider is a helper component that helps us inject the store to react components
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
