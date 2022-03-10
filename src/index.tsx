import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { App } from './containers/App';
import './i18n';
import { isMobileDevice } from './helpers/mobile';
import { MobileConfig } from './config/mobile';
import { isInStandaloneMode } from './helpers/standalone';

/**
 * Установлен в true, если приложение - мобильное
 */
const isMobile = isMobileDevice() && window.innerWidth < MobileConfig.breakpoint;

/**
 * Возвращает true, если приложение - standalone
 */
const isStandalone = isInStandaloneMode();

render(
    <Provider store={store}>
        <App isStandalone={isStandalone} isMobile={isMobile} />
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
