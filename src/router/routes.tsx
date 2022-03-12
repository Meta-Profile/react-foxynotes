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
import { Compositor } from '../containers/Compositor';

export interface RouterProps {}

/*
    return (
        <div style={{ marginTop: '80px', color: 'white' }}>
            {history.map((v, i) => {
                return (
                    <div key={i + v.path}>
                        {v.path} {JSON.stringify(v.args)}
                    </div>
                );
            })}
        </div>
    );*/

export const Router: FC<RouterProps> = (props) => {
    const { user } = useSelector(getAuth);
    const { current, args } = useNavigator();

    // Выбор текущего компонента с учетом приватности
    // const Component = useMemo(
    //     () =>
    //         current && current in BasePaths
    //             ? !BasePaths[current].private || (BasePaths[current].private && user)
    //                 ? BasePaths[current].component
    //                 : BasePaths['private'].component
    //             : null,
    //     [current]
    // );
    return (
        <div>
            {/*{isDesktop && user && <NavBar />}*/}
            {isNotDesktop && user && current !== NavigatorConfig.paths.profile && (
                <DefaultNavBarController />
            )}
            {isNotDesktop && user && <BottomTabBar />}
            {/*{Component && <Component {...{ ...args }} />}*/}
            <Compositor />
        </div>
    );
};
