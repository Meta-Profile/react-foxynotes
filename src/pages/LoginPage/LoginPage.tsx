import { FC } from 'react';
import { FlexBox } from '../../components/FlexBox';
import { LoginContainer } from './components/LoginContainer';
import { Text } from '../../components/Text';
import { LoginForm } from './components/LoginForm';
import { Footer } from '../../components/Footer';
import { useSelector } from 'react-redux';
import { LoginPageSelector } from './selectors';
import { RegisterForm } from './components/RegisterForm';
import { useTranslation } from 'react-i18next';

export const LoginPage: FC = () => {
    const { form } = useSelector(LoginPageSelector);
    const { t } = useTranslation();

    return (
        <FlexBox column align={'center'} minHeight={'100vh'}>
            <LoginContainer padding>
                <FlexBox column justify={'center'} gap>
                    <Text type={'title'}>{t('login_title')}</Text>
                    <Text type={'normal'}>{t('login_text')}</Text>
                </FlexBox>
                {form === 'login' ? <LoginForm /> : <RegisterForm />}
            </LoginContainer>
            <Footer />
        </FlexBox>
    );
};
