import { FC, useCallback, useEffect, useState } from 'react';
import { LoginFormWrapper } from './styles';
import { Button } from '../../../components';
import { Divider } from '../../../components';
import { Text, TextFlexBox } from '../../../components/Text';
import { Input } from '../../../components';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { RoutesConfig } from '../../../config/routes';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../../slices/auth';
import { SigninProps } from '../../../api/api.auth';
import { getAuth } from '../../../selectors';

export const LoginForm: FC = (props) => {
    const { t } = useTranslation();
    const history = useHistory();

    // ===========================================================================
    // Selectors
    // ===========================================================================
    const { user } = useSelector(getAuth);

    // ===========================================================================
    // Dispatch
    // ===========================================================================
    const dispatch = useDispatch();
    const _login = useCallback((props: SigninProps) => dispatch(loginAction(props)), [dispatch]);

    // ===========================================================================
    // Hooks
    // ===========================================================================

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onButtonClick = useCallback(async () => {
        _login({ username, password });
    }, [username, password, _login]);

    useEffect(() => {
        if (user) history.push(RoutesConfig.paths.home);
    }, [user]);

    const onSwitchFormClick = useCallback(() => {
        history.push(RoutesConfig.paths.signUp);
    }, [history]);

    return (
        <LoginFormWrapper column gap padding backgroundColor={'black3'}>
            <Input
                value={username}
                onInput={(event) => setUsername(event.currentTarget.value)}
                type="text"
                name="login"
                placeholder={t('login_form_username')}
            />
            <Input
                value={password}
                onInput={(event) => setPassword(event.currentTarget.value)}
                type="password"
                name="password"
                placeholder={t('login_form_password')}
            />
            <Button onClick={onButtonClick} type={'black'}>
                {t('login_form_signin')}
            </Button>
            <Divider />
            <TextFlexBox justify={'center'} align={'center'} color={'black100'}>
                {t('login_form_no')}&nbsp;
                <Text onClick={onSwitchFormClick} color={'black40'}>
                    {t('login_form_no_go')}
                </Text>
            </TextFlexBox>
        </LoginFormWrapper>
    );
};
