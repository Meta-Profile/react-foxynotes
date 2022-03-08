import { FC } from 'react';
import { Icon } from '../Icon';
import { BottomTaBarButtonsWrapper, BottomTabBarAvatar, ButtonTabBarButton } from './styles';
import { useHistory, useLocation } from 'react-router-dom';
import { RoutesConfig } from '../../config/routes';

export const BottomTaBarButtons: FC = () => {
    const history = useHistory();
    const { pathname } = useLocation();

    return (
        <BottomTaBarButtonsWrapper>
            <Icon type={'feed'} size={'m'} />
            <Icon type={'add'} size={'m'} />
            <ButtonTabBarButton
                active={pathname === RoutesConfig.paths.home}
                onClick={() => history.push(RoutesConfig.paths.home)}>
                <Icon type={'meta'} size={'m'} />
            </ButtonTabBarButton>
            <Icon type={'search'} size={'m'} />
            <BottomTabBarAvatar
                url={
                    'https://bipbap.ru/wp-content/uploads/2015/02/71accf_f4a84ee668bc4f819fba68f556df3aa9_mv2_d_1638_2048_s_2.jpg'
                }
            />
        </BottomTaBarButtonsWrapper>
    );
};
