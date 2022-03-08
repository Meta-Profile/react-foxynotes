import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { FC } from 'react';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/profile';
import { PrivateRoute } from './PrivateRoute';
import { RoutesConfig } from '../config/routes';
import { SpacePage } from '../pages/SpacePage';
import { NavBar } from '../components/NavBar';

// const ProfilePage = lazy(() => import('../pages/profile'));

export const Router: FC = (props) => {
    const { children } = props;
    return (
        <BrowserRouter>
            <NavBar />
            {children}
            <Switch>
                <PrivateRoute
                    exact
                    path={RoutesConfig.paths.home}
                    component={() => <SpacePage />}
                />
                <PrivateRoute
                    exact
                    path={RoutesConfig.paths.profile}
                    component={() => <ProfilePage />}
                />
                <PrivateRoute
                    exact
                    path={RoutesConfig.paths.profileMetaId(':mpId')}
                    component={() => <ProfilePage />}
                />
                <PrivateRoute
                    exact
                    path={RoutesConfig.paths.profileMetaIdCategory(':mpId', ':mpcId')}
                    component={() => <ProfilePage />}
                />
                <Route exact path={RoutesConfig.paths.signIn} component={() => <LoginPage />} />
                <Route
                    exact
                    path={RoutesConfig.paths.signUp}
                    component={() => <LoginPage signup={true} />}
                />
            </Switch>
        </BrowserRouter>
    );
};
