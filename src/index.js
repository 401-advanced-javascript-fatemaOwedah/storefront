import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import store from './store';

function Main() {
    return (
        <Provider store={store} >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);