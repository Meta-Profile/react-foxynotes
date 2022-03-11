import { BrowserRouter } from 'react-router-dom';
import React, { FC, useMemo } from 'react';
import { NavigatorConfig } from '../config/routes';
import { NavBar } from '../components/NavBar';
import { BottomTabBar } from '../components/BottomTabBar';
import { useNavigator } from '../hooks/useNavigator';
import { HomeViewController } from '../controllers/HomeViewController';
import { LoginViewController } from '../controllers/LoginViewController';
import { ProfileViewController } from '../controllers/ProfileViewController';
import { useSelector } from 'react-redux';
import { getAuth } from '../selectors';
import { UserViewController } from '../controllers/UserViewController';
import { isDesktop, isNotDesktop } from '../states';
import { AddViewController } from '../controllers/AddViewController';
import { DefaultNavBarController } from '../controllers/DefaultNavBarController';

export interface RouterProps {}

export const BasePaths = {
    error: { component: () => null, private: false },
    private: { component: LoginViewController, private: false },
    [NavigatorConfig.paths.add]: { component: AddViewController, private: false },
    [NavigatorConfig.paths.home]: { component: HomeViewController, private: true },
    [NavigatorConfig.paths.profile]: { component: ProfileViewController, private: true },
    [NavigatorConfig.paths.user]: { component: UserViewController, private: true },
};

export const Router: FC<RouterProps> = (props) => {
    const { user } = useSelector(getAuth);
    const { current, args } = useNavigator();

    // Выбор текущего компонента с учетом приватности
    const Component = useMemo(
        () =>
            current && current in BasePaths
                ? !BasePaths[current].private || (BasePaths[current].private && user)
                    ? BasePaths[current].component
                    : BasePaths['private'].component
                : null,
        [current]
    );
    return (
        <BrowserRouter>
            {isDesktop && user && <NavBar />}
            {isNotDesktop && user && current !== NavigatorConfig.paths.profile && (
                <DefaultNavBarController />
            )}
            {isNotDesktop && user && <BottomTabBar />}
            {Component && <Component {...{ ...args }} />}
        </BrowserRouter>
    );
};
