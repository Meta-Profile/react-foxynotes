import { FC, useCallback, useState } from 'react';
import { LoginFormWrapper } from './styles';
import { Button } from '../../../components/ui/Button';
import { Divider } from '../../../components/ui/Divider';
import { Text, TextFlexBox } from '../../../components/ui/Text';
import { Input } from '../../../components/ui/Input';
import { useDispatch } from 'react-redux';
import { updateForm } from '../LoginPageSlice';
import { useAuth } from '../../../app/auth/hooks/useAuth';
import { useTranslation } from 'react-i18next';

export const LoginForm: FC = (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();

    const onButtonClick = useCallback(async () => {
        login({ username, password });
    }, [username, password, login]);

    const onSwitchFormClick = useCallback(() => {
        dispatch(updateForm('register'));
    }, [dispatch]);

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
