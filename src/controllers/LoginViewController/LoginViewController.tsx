import { ViewControllerProps } from '../CoreViewController';
import { FC, useCallback, useEffect, useState } from 'react';
import { LoginViewFormContainer, LoginViewWrapperMobile } from './components/styles';
import { Button, Divider, Input, Text } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../../selectors';
import { SigninProps } from '../../api/api.auth';
import { loginAction } from '../../slices/auth';
import { useTranslation } from 'react-i18next';
import { useNavigator } from '../../hooks/useNavigator';
import { NavigatorConfig } from '../../config/routes';
import { TextFlexBox } from '../../components/Text';
import { StandaloneHelper } from '../../helpers/standalone';
import { useTheme } from 'styled-components';
import { defaultTheme } from '../../theme/defaultTheme';
import { isMobile, isStandalone } from '../../states';

export const LoginViewController: FC<ViewControllerProps> = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { t } = useTranslation();
    const { present } = useNavigator();

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
    // Theming
    // ===========================================================================

    const theme = useTheme() as typeof defaultTheme;
    useEffect(() => {
        StandaloneHelper.setColor(theme.colors.whiteAbsolute);
    }, [theme]);

    // ===========================================================================
    // Hooks
    // ===========================================================================

    const onButtonClick = useCallback(async () => {
        _login({ username, password });
    }, [username, password, _login]);

    useEffect(() => {
        if (user) {
            present(NavigatorConfig.paths.home);
        }
    }, [user]);

    // ===========================================================================
    // MOBILE || STANDALONE
    // ===========================================================================
    if (isMobile || isStandalone) {
        return (
            <LoginViewWrapperMobile>
                <Text type={'title'}>{t('title')}</Text>
                <LoginViewFormContainer>
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
                        <Text onClick={() => null} color={'black40'}>
                            {t('login_form_no_go')}
                        </Text>
                    </TextFlexBox>
                </LoginViewFormContainer>
            </LoginViewWrapperMobile>
        );
    }

    // ===========================================================================
    // DESKTOP
    // ===========================================================================
    return <div>Go to mobile, bitch</div>;
};
