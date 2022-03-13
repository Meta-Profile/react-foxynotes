import React, { FC, useMemo } from 'react';
import { NavigatorConfig } from '../config/routes';
import { BottomTabBar } from '../components/BottomTabBar';
import { useNavigator } from '../hooks/useNavigator';
import { HomeViewController } from '../controllers/HomeViewController';
import { LoginViewController } from '../controllers/LoginViewController';
import { ProfileViewController } from '../controllers/ProfileViewController';
import { useSelector } from 'react-redux';
import { getAuth } from '../selectors';
import { UserViewController } from '../controllers/UserViewController';
import { AddViewController } from '../controllers/AddViewController';
import { isMobile } from '../states';

export interface RouterProps {}

export const BasePaths = {
    error: { component: () => null, private: false },
    private: { component: LoginViewController, private: false },
    [NavigatorConfig.paths.add]: { component: AddViewController, private: false },
    [NavigatorConfig.paths.home]: { component: HomeViewController, private: true },
    [NavigatorConfig.paths.profile]: { component: ProfileViewController, private: true },
    [NavigatorConfig.paths.user]: { component: UserViewController, private: true },
};

function GetController(path: string | undefined, user: unknown): FC<{ args: any }> | null {
    // Проверка на пустоту
    if (!path) return null;

    // Проверка на 404
    if (!(path in BasePaths)) {
        return BasePaths['error'].component;
    }

    // Sunny days
    const Controller = BasePaths[path];

    if (Controller.private && !user) return BasePaths['private'].component as any;
    return Controller.component as any;
}

export const Router: FC<RouterProps> = (props) => {
    const { user } = useSelector(getAuth);
    const { current, args } = useNavigator();
    const Controller = GetController(current, user);
    if (!Controller) return null;

    return (
        <div>
            {/*{isDesktop && user && <NavBar />}*/}
            {isMobile && user && <BottomTabBar />}
            {Controller && <Controller args={args} />}
        </div>
    );
};
