import { FC, useCallback, useState } from 'react';
import { LoginFormWrapper } from './styles';
import { Button } from '../../../components';
import { Divider } from '../../../components';
import { Text, TextFlexBox } from '../../../components/Text';
import { Input } from '../../../components';
import { useAuth } from '../../../auth/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { RoutesConfig } from '../../../config/routes';

export const LoginForm: FC = (props) => {
    const { t } = useTranslation();
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();

    const onButtonClick = useCallback(async () => {
        login({ username, password });
    }, [username, password, login]);

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
