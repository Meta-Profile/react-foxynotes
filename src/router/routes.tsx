import { BrowserRouter } from 'react-router-dom';
import React, { FC, useMemo } from 'react';
import { RoutesConfig } from '../config/routes';
import { NavBar } from '../components/NavBar';
import { BottomTabBar } from '../components/BottomTabBar';
import { useNavigator } from '../hooks/useNavigator';
import { HomeViewController } from '../controllers/HomeViewController';
import { LoginViewController } from '../controllers/LoginViewController';
import { ProfileViewController } from '../controllers/ProfileViewController';
import { useSelector } from 'react-redux';
import { getAuth } from '../selectors';
import { UserViewController } from '../controllers/UserViewController';

export interface RouterProps {
    isMobile: boolean;
    isStandalone: boolean;
}

export const BasePaths = {
    error: { component: () => null, private: false },
    private: { component: LoginViewController, private: false },
    [RoutesConfig.paths.home]: { component: HomeViewController, private: true },
    [RoutesConfig.paths.profile]: { component: ProfileViewController, private: true },
    [RoutesConfig.paths.user]: { component: UserViewController, private: true },
};

export const Router: FC<RouterProps> = (props) => {
    const { user } = useSelector(getAuth);
    const { isMobile, isStandalone } = props;
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
            {!isMobile && user && <NavBar />}
            {isMobile && user && <BottomTabBar />}
            {Component && <Component {...{ ...args, isMobile, isStandalone }} />}
        </BrowserRouter>
    );
};
