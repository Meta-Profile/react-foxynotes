import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { getAuth } from '../selectors';

interface PrivateRouteProps extends RouteProps {
    component: any;
}

/**
 * Приватный роутер
 *
 * @param Component
 * @param rest
 * @constructor
 */
export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
    const { user } = useSelector(getAuth);

    return (
        <Route
            render={(props) => (user ? <Component {...props} /> : <Redirect to="/login/signin" />)}
            {...rest}
        />
    );
};
