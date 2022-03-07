import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { SigninProps } from '../../api/methods/auth';
import { loginAction } from '../slice';
import { AuthSelector } from '../selectors';

export const useAuth = () => {
    const dispatch = useDispatch();
    const { token, error: lastLoginError } = useSelector(AuthSelector);

    const login = useCallback(
        (props: SigninProps) => {
            dispatch(loginAction(props));
        },
        [dispatch]
    );

    return { login, lastLoginError, token };
};
