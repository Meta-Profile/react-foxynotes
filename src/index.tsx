import React from 'react';
import {render} from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Router} from "./router/routes";
import {store} from "./store";
import {Provider} from "react-redux";

render(
    <Provider store={store}>
        <Router/>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
