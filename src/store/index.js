import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

// import reducer from './store';
import cart from './cart';
import reducer from './store';

let rootReducer = combineReducers({cart, reducer });

const store = () => {
    return createStore(rootReducer, composeWithDevTools());
}



export default store();