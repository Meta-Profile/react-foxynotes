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
import { useAuth } from '../../../app/auth/hooks/useAuth';

export const LoginForm: FC = (props) => {
    const dispatch = useDispatch();

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
                placeholder="Email или Ваш @metaId"
            />
            <Input
                value={password}
                onInput={(event) => setPassword(event.currentTarget.value)}
                type="password"
                name="password"
                placeholder="Пароль"
            />
            <Button onClick={onButtonClick} type={'black'}>
                Войти
            </Button>
            <Divider />
            <TextFlexBox justify={'center'} align={'center'} color={'black100'}>
                Еще нет аккаунта?&nbsp;
                <Text onClick={onSwitchFormClick} color={'black40'}>
                    Создать аккаунт
                </Text>
            </TextFlexBox>
        </LoginFormWrapper>
    );
};
