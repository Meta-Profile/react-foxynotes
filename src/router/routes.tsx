import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FC } from 'react';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/profile';
import { PrivateRoute } from './PrivateRoute';
import { ConfigRoutes } from '../config/routes';
import { SpacePage } from '../pages/SpacePage';

// const ProfilePage = lazy(() => import('../pages/profile'));

export const Router: FC = (props) => {
    const { children } = props;
    return (
        <BrowserRouter>
            {children}
            <Switch>
                <PrivateRoute
                    exact
                    path={ConfigRoutes.paths.home}
                    component={() => <SpacePage />}
                />
                <PrivateRoute
                    exact
                    path={ConfigRoutes.paths.profile}
                    component={() => <ProfilePage />}
                />
                <Route exact path={ConfigRoutes.paths.signIn} component={() => <LoginPage />} />
                <Route
                    exact
                    path={ConfigRoutes.paths.signUp}
                    component={() => <LoginPage signup={true} />}
                />
            </Switch>
        </BrowserRouter>
    );
};
