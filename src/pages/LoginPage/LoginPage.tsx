import { FC, useEffect, useState } from 'react';
import { FlexBox } from '../../components';
import { LoginContainer } from './components/LoginContainer';
import { Text } from '../../components';
import { LoginForm } from './components/LoginForm';
import { Footer } from '../../components/Footer';
import { RegisterForm } from './components/RegisterForm';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getAuth } from '../../selectors';
import { useHistory } from 'react-router-dom';
import { NavigatorConfig } from '../../config/routes';

export interface LoginPageProps {
    signup?: boolean;
}

export const LoginPage: FC<LoginPageProps> = (props) => {
    const { user } = useSelector(getAuth);
    const history = useHistory();
    const { signup } = props;
    const { t } = useTranslation();

    useEffect(() => {
        if (user) history.push(NavigatorConfig.paths.home);
    }, [user]);

    return (
        <FlexBox backgroundColor={'white'} column align={'center'} minHeight={'100vh'}>
            <LoginContainer padding>
                <FlexBox column justify={'center'} gap>
                    <Text type={'title'}>{t('login_title')}</Text>
                    <Text type={'normal'}>{t('login_text')}</Text>
                </FlexBox>
                {signup ? <RegisterForm /> : <LoginForm />}
            </LoginContainer>
            <Footer />
        </FlexBox>
    );
};
