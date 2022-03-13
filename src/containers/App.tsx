import React, { FC, useEffect } from 'react';
import { Themes } from '../theme';
import { Reset } from '../components';
import { ToastContainer } from 'react-toastify';
import { Router } from '../router/routes';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getApp, getAuth } from '../selectors';
import { authenticate } from '../slices/auth';
import { useNavigator } from '../hooks/useNavigator';
import { NavigatorConfig } from '../config/routes';
import { LoginViewController } from '../controllers/LoginViewController';
import { AddViewController } from '../controllers/AddViewController';
import { HomeViewController } from '../controllers/HomeViewController';
import { ProfileViewController } from '../controllers/ProfileViewController';
import { UserViewController } from '../controllers/UserViewController';
import { DefaultLoadingContainer } from '../components/DefaultLoadingContainer';
import 'cropperjs/dist/cropper.css';

export interface AppProps {}

export const BasePaths = {
    error: { component: () => null, private: false },
    private: { component: LoginViewController, private: false },
    [NavigatorConfig.paths.add]: { component: AddViewController, private: false },
    [NavigatorConfig.paths.home]: { component: HomeViewController, private: true },
    [NavigatorConfig.paths.profile]: { component: ProfileViewController, private: true },
    [NavigatorConfig.paths.user]: { component: UserViewController, private: true },
};

export const App: FC<AppProps> = (props) => {
    // ===========================================================================
    // Selectors
    // ===========================================================================
    const { loading } = useSelector(getAuth);
    const { loading: loadingApp } = useSelector(getApp);

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

    const isLoading = loading || loadingApp;
    if (loading) return <div>Loading...</div>;

    return (
        <ThemeProvider theme={Themes.default}>
            <Reset />
            <ToastContainer />
            {isLoading && <DefaultLoadingContainer />}
            <Router />
        </ThemeProvider>
    );
};
