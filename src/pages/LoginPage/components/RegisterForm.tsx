import { FC, useCallback, useState } from 'react';
import { LoginFormWrapper } from './styles';
import { Button } from '../../../components/ui/Button';
import { Divider } from '../../../components/ui/Divider';
import { Text, TextFlexBox } from '../../../components/ui/Text';
import { Input } from '../../../components/ui/Input';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { updateForm } from '../LoginPageSlice';
import { AuthAPI } from '../../../app/api';
import { useTranslation } from 'react-i18next';

export const RegisterForm: FC = (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onButtonClick = useCallback(async () => {
        try {
            await AuthAPI.signup({
                username,
                password,
                email,
                role: [],
            });
            toast.success(t('register_form_alert_success'));
            dispatch(updateForm('login'));
        } catch (e: any) {
            toast.error(e.error);
        }
    }, [username, password, email, dispatch]);

    const onSwitchFormClick = useCallback(() => {
        dispatch(updateForm('login'));
    }, [dispatch]);

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
                placeholder={t('register_form_email')}
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
