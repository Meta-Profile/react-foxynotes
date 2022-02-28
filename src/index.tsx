import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Router } from './router/routes';
import { store } from './store';
import { Provider } from 'react-redux';
import { Reset } from './components/Reset';
import { ThemeProvider } from 'styled-components';
import { Themes } from './app/theme';

render(
    <Provider store={store}>
        <ThemeProvider theme={Themes.default}>
            <Reset />
            <Router />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
