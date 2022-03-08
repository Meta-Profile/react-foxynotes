import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { SigninProps } from '../../api/api.auth';
import { loginAction } from '../../slices/auth';
import { getAuth } from '../../selectors';

export const useAuth = () => {
    const dispatch = useDispatch();
    const { token, error: lastLoginError } = useSelector(getAuth);

    const login = useCallback(
        (props: SigninProps) => {
            dispatch(loginAction(props));
        },
        [dispatch]
    );

    return { login, lastLoginError, token };
};
