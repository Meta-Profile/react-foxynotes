import { FC } from 'react';
import { FlexBox } from '../../components/ui/FlexBox';
import { LoginContainer } from './components/LoginContainer';
import { Text } from '../../components/ui/Text';
import { LoginForm } from './components/LoginForm';
import { Footer } from '../../components/Footer';
import { useSelector } from 'react-redux';
import { LoginPageSelector } from './selectors';
import { RegisterForm } from './components/RegisterForm';

export const LoginPage: FC = () => {
    const { form } = useSelector(LoginPageSelector);

    return (
        <FlexBox column align={'center'} minHeight={'100vh'}>
            <LoginContainer padding>
                <FlexBox column justify={'center'} gap>
                    <Text type={'title'}>Foxy Notes</Text>
                    <Text type={'normal'}>
                        Foxy Notes - это сервис, меняющий взаимоотношения людей в лучшую сторону.
                    </Text>
                </FlexBox>
                {form === 'login' ? <LoginForm /> : <RegisterForm />}
            </LoginContainer>
            <Footer />
        </FlexBox>
    );
};
