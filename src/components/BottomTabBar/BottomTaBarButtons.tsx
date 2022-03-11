import { FC } from 'react';
import { Icon, IconType } from '../Icon';
import { BottomTaBarButtonsWrapper, BottomTabBarAvatar, ButtonTabBarButton } from './styles';
import { useHistory, useLocation } from 'react-router-dom';
import { NavigatorConfig } from '../../config/routes';
import { useNavigator } from '../../hooks/useNavigator';

const ButtonsList = [
    {
        icon: 'meta',
        route: NavigatorConfig.paths.home,
    },
    {
        icon: 'feed',
        route: NavigatorConfig.paths.feed,
    },
    {
        icon: 'add',
        route: NavigatorConfig.paths.add,
    },
    {
        icon: 'search',
        route: NavigatorConfig.paths.search,
    },
];

export const BottomTaBarButtons: FC = () => {
    const { present, history } = useNavigator();
    const historyFirstPath = history[0]?.path;

    return (
        <BottomTaBarButtonsWrapper>
            {ButtonsList.map((v, i) => (
                <ButtonTabBarButton
                    key={i}
                    active={v.route === historyFirstPath}
                    onClick={() => present(v.route)}>
                    <Icon type={v.icon as IconType} size={'m'} />
                </ButtonTabBarButton>
            ))}
            <BottomTabBarAvatar
                active={NavigatorConfig.paths.user === historyFirstPath}
                onClick={() => present(NavigatorConfig.paths.user)}
                url={
                    'https://bipbap.ru/wp-content/uploads/2015/02/71accf_f4a84ee668bc4f819fba68f556df3aa9_mv2_d_1638_2048_s_2.jpg'
                }
            />
        </BottomTaBarButtonsWrapper>
    );
};
