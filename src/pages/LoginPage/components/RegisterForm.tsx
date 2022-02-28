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

export const RegisterForm: FC = (props) => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onButtonClick = useCallback(async () => {
        try {
            await AuthAPI.signup({
                username,
                password,
                email,
                role: []
            });
            toast.success('Ваш аккаунт успешно создан!');
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
                placeholder="Ваш email"
            />

            <Input
                value={username}
                onInput={(event) => setUsername(event.currentTarget.value)}
                type="text"
                name="login"
                placeholder="Придумайте Ваш @metaId"
            />
            <Input
                value={password}
                onInput={(event) => setPassword(event.currentTarget.value)}
                type="password"
                name="password"
                placeholder="Ваш пароль"
            />
            <Button onClick={onButtonClick} type={'black'}>
                Создать аккаунт
            </Button>
            <Divider />
            <TextFlexBox justify={'center'} align={'center'} color={'black100'}>
                Уже есть аккаунт?&nbsp;
                <Text onClick={onSwitchFormClick} color={'black40'}>
                    Войти
                </Text>
            </TextFlexBox>
        </LoginFormWrapper>
    );
};
