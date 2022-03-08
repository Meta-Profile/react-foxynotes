import styled from 'styled-components';

export const NavBarHolder = styled.div`
    display: flex;
    min-height: 64px;
    height: 64px;
`;

export const NavBarWrapper = styled.div`
    position: fixed;
    background-color: ${(p) => p.theme.colors.black100};
    display: flex;
    height: 64px;
    width: 100%;
    align-items: center;
    justify-content: center;
    z-index: 100000;
`;

export const NavBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    width: 1152px;
`;

export const NavBarButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 250px;
    height: 50px;
`;
