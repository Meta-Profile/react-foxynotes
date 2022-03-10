import styled, { css } from 'styled-components';

export const BottomTabBarWrapper = styled.div<{ pwa?: boolean }>`
    user-select: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${(p) => p.theme.colors.black5};
    display: flex;
    flex-direction: column;
    height: ${(p) => (p.pwa ? 85 : 50)}px;
    z-index: 100000;
`;

export const BottomTabBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;
    height: 50px;
`;

export const BottomTaBarButtonsWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: ${(p) => p.theme.colors.black40};
`;

export const ButtonTabBarButton = styled.div<{ active?: boolean }>`
    cursor: pointer;
    transition: all 0.2s;
    ${(p) =>
        p.active &&
        css`
            color: ${(p) => p.theme.colors.primary} !important;
        `};

    &:hover {
        //color: ${(p) => p.theme.colors.black20};
    }
`;

export const BottomTabBarAvatar = styled.div<{ url?: string }>`
    width: 30px;
    min-width: 30px;
    max-width: 30px;
    height: 30px;
    min-height: 30px;
    max-height: 30px;

    background: url(${(p) => p.url}) center center;
    background-size: cover;
    /* Black 70 */

    border: 1px solid ${(p) => p.theme.colors.black70};
    box-sizing: border-box;
    border-radius: 100px;
`;
