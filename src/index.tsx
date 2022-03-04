import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Router } from './router/routes';
import { store } from './store';
import { Provider } from 'react-redux';
import { Reset } from './components/ui';
import { ThemeProvider } from 'styled-components';
import { Themes } from './components/ui/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './i18n';

render(
    <Provider store={store}>
        <ThemeProvider theme={Themes.default}>
            <Reset />
            <ToastContainer />
            <Router />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
