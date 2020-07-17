import { createStore, combineReducers, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

// import reducer from './store';
import cart from './cart';
import reducer from './store';
import data from './reducer'
import thunk from 'redux-thunk'

let rootReducer = combineReducers({cart, reducer ,data});

const store = () => {
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}



export default store();