import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';


import store from './store/store';

function Main() {
    return (
         <Provider store={store} >
            <App />
         </Provider>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render( <Main />, rootElement);