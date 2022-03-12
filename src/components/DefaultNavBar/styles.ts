import styled from 'styled-components';

export interface DefaultNavBarWrapperProps {
    backgroundColor?: string;
    foreColor?: string;
}
export const DefaultNavBarWrapper = styled.div<DefaultNavBarWrapperProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: ${(p) => p.backgroundColor ?? p.theme.colors.blackAbsolute};
    color: ${(p) => p.foreColor ?? p.theme.colors.white};
    z-index: 100000;
    position: absolute;
    gap: 16px;
    top: 0;
    left: 0;
    right: 0;
`;

export const DefaultNavBarContainer = styled.div`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    min-height: 50px;
    max-height: 50px;
    display: flex;
    padding: 0 16px;
`;

export const DefaultNavBarItem = styled.div`
    display: flex;
    min-width: 30px;
    align-items: center;
    height: 50px;
`;

export const DefaultNavBarButton = styled.div``;
