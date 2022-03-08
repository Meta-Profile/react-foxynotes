import { FC } from 'react';
import { NavBarButtonsContainer, NavBarContainer, NavBarHolder, NavBarWrapper } from './styles';
import { Text } from '../Text';
import { BottomTaBarButtons } from '../BottomTabBar/BottomTaBarButtons';

export const NavBar: FC = () => {
    return (
        <>
            <NavBarHolder />
            <NavBarWrapper>
                <NavBarContainer>
                    <Text type={'small'} color={'whiteAbsolute'}>
                        META LOGO
                    </Text>
                    <NavBarButtonsContainer>
                        <BottomTaBarButtons />
                    </NavBarButtonsContainer>
                </NavBarContainer>
            </NavBarWrapper>
        </>
    );
};
