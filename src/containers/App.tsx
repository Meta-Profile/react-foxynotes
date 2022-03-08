import React, { FC, useEffect } from 'react';
import { Themes } from '../theme';
import { Reset } from '../components';
import { ToastContainer } from 'react-toastify';
import { Router } from '../router/routes';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../selectors';
import { authenticate } from '../slices/auth';

export const App: FC = () => {
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
            <Router />
        </ThemeProvider>
    );
};
