import React, { FC, useEffect } from 'react';
import { Themes } from '../theme';
import { Reset } from '../components';
import { ToastContainer } from 'react-toastify';
import { Router } from '../router/routes';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../selectors';
import { authenticate } from '../slices/auth';
import { useNavigator } from '../hooks/useNavigator';
import { DefaultNavBarController } from '../controllers/DefaultNavBarController';
import { NavigatorConfig } from '../config/routes';

export interface AppProps {}

export const App: FC<AppProps> = (props) => {
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

    const { present } = useNavigator();

    useEffect(() => {
        _authenticate();
    }, []);

    useEffect(() => {
        present(NavigatorConfig.paths.home);
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <ThemeProvider theme={Themes.default}>
            <Reset />
            <ToastContainer />
            <Router />
        </ThemeProvider>
    );
};
