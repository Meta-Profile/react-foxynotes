import { FC } from 'react';
import { BottomTabBarContainer, BottomTabBarWrapper } from './styles';
import { BottomTaBarButtons } from './BottomTaBarButtons';
import { useIsMobile } from '../../hooks/useIsMobile';
import { isInStandaloneMode } from '../../helpers/standalone';

export const BottomTabBar: FC = () => {
    const isMobile = useIsMobile();

    if (!isMobile) return null;
    return (
        <BottomTabBarWrapper pwa={isInStandaloneMode()}>
            <BottomTabBarContainer>
                <BottomTaBarButtons />
            </BottomTabBarContainer>
        </BottomTabBarWrapper>
    );
};
