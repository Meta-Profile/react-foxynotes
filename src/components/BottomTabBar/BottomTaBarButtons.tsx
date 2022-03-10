import { FC } from 'react';
import { Icon, IconType } from '../Icon';
import { BottomTaBarButtonsWrapper, BottomTabBarAvatar, ButtonTabBarButton } from './styles';
import { useHistory, useLocation } from 'react-router-dom';
import { RoutesConfig } from '../../config/routes';
import { useNavigator } from '../../hooks/useNavigator';

const ButtonsList = [
    {
        icon: 'meta',
        route: RoutesConfig.paths.home,
    },
    {
        icon: 'feed',
        route: '/feed',
    },
    {
        icon: 'add',
        route: '/add',
    },
    {
        icon: 'search',
        route: '/search',
    },
];

export const BottomTaBarButtons: FC = () => {
    const { present, current } = useNavigator();
    return (
        <BottomTaBarButtonsWrapper>
            {ButtonsList.map((v, i) => (
                <ButtonTabBarButton
                    key={i}
                    active={v.route === current}
                    onClick={() => present(v.route)}>
                    <Icon type={v.icon as IconType} size={'m'} />
                </ButtonTabBarButton>
            ))}
            <BottomTabBarAvatar
                active={RoutesConfig.paths.user === current}
                onClick={() => present(RoutesConfig.paths.user)}
                url={
                    'https://bipbap.ru/wp-content/uploads/2015/02/71accf_f4a84ee668bc4f819fba68f556df3aa9_mv2_d_1638_2048_s_2.jpg'
                }
            />
        </BottomTaBarButtonsWrapper>
    );
};
