import { BrowserRouter } from 'react-router-dom';
import React, { FC } from 'react';
import { RoutesConfig } from '../config/routes';
import { NavBar } from '../components/NavBar';
import { BottomTabBar } from '../components/BottomTabBar';
import { useNavigator } from '../hooks/useNavigator';
import { HomeViewController } from '../controllers/HomeViewController';
import { LoginViewController } from '../controllers/LoginViewController';
import { ProfileViewController } from '../controllers/ProfileViewController';

export interface RouterProps {
    isMobile: boolean;
    isStandalone: boolean;
}

export const BasePaths = {
    error: () => null,
    private: LoginViewController,
    [RoutesConfig.paths.home]: HomeViewController,
    [RoutesConfig.paths.profile]: ProfileViewController,
};

export const Router: FC<RouterProps> = (props) => {
    const { children, isMobile, isStandalone } = props;
    const { current, args } = useNavigator();
    const Component = current && current in BasePaths ? BasePaths[current] : null;
    return (
        <BrowserRouter>
            {!isMobile && <NavBar />}
            {isMobile && <BottomTabBar />}
            {Component && <Component {...{ ...args, isMobile, isStandalone }} />}
        </BrowserRouter>
    );
};
