import { FC } from 'react';
import { NavBarButtonsContainer, NavBarContainer, NavBarHolder, NavBarWrapper } from './styles';
import { Text } from '../Text';
import { BottomTaBarButtons } from '../BottomTabBar/BottomTaBarButtons';
import { useSelector } from 'react-redux';
import { getAuth } from '../../selectors';

export const NavBar: FC = () => {
    const { user } = useSelector(getAuth);
    if (!user) return null;
    return (
        <>
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
            <NavBarHolder />
        </>
    );
};
