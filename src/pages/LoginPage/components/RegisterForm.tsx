import { FC, useCallback, useState } from 'react';
import { LoginFormWrapper } from './styles';
import { Button } from '../../../components';
import { Divider } from '../../../components';
import { Text, TextFlexBox } from '../../../components/Text';
import { Input } from '../../../components';
import { toast } from 'react-toastify';
import { AuthAPI } from '../../../api';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { NavigatorConfig } from '../../../config/routes';

export const RegisterForm: FC = () => {
    const { t } = useTranslation();
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onButtonClick = useCallback(async () => {
        try {
            await AuthAPI.signup({
                username,
                password,
                email,
            });
            toast.success(t('register_form_alert_success'));
            history.push(NavigatorConfig.paths.signIn);
        } catch (e: any) {
            toast.error(e.error);
        }
    }, [username, password, email, history]);

    const onSwitchFormClick = useCallback(() => {
        history.push(NavigatorConfig.paths.signIn);
    }, [history]);

    return (
        <LoginFormWrapper column gap padding backgroundColor={'black3'}>
            <Input
                value={email}
                onInput={(event) => setEmail(event.currentTarget.value)}
                type="text"
                name="email"
                placeholder={t('register_form_email')}
            />

            <Input
                value={username}
                onInput={(event) => setUsername(event.currentTarget.value)}
                type="text"
                name="login"
                placeholder={t('register_form_username')}
            />
            <Input
                value={password}
                onInput={(event) => setPassword(event.currentTarget.value)}
                type="password"
                name="password"
                placeholder={t('register_form_password')}
            />
            <Button onClick={onButtonClick} type={'black'}>
                {t('register_form_signup')}
            </Button>
            <Divider />
            <TextFlexBox justify={'center'} align={'center'} color={'black100'}>
                {t('register_form_no')}&nbsp;
                <Text onClick={onSwitchFormClick} color={'black40'}>
                    {t('register_form_no_go')}
                </Text>
            </TextFlexBox>
        </LoginFormWrapper>
    );
};
