import React, { FC, useEffect } from 'react';
import { Themes } from '../theme';
import { Reset } from '../components';
import { ToastContainer } from 'react-toastify';
import { Router } from '../router/routes';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../selectors';
import { authenticate } from '../slices/auth';

export interface AppProps {
    isMobile: boolean;
    isStandalone: boolean;
}

export const App: FC<AppProps> = (props) => {
    const { isMobile, isStandalone } = props;

    // ===========================================================================
    // Selectors
    // ===========================================================================
    const { loading } = useSelector(getAuth);

    // ===========================================================================
    // Dispatch
    // ===========================================================================
    const dispatch = useDispatch();
    const _authenticate = () => dispatch(authenticate());

    // ===========================================================================
    // Hooks
    // ===========================================================================
    useEffect(() => {
        _authenticate();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <ThemeProvider theme={Themes.default}>
            <Reset />
            <ToastContainer />
            <Router isMobile={isMobile} isStandalone={isStandalone} />
        </ThemeProvider>
    );
};
