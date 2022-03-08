import styled from 'styled-components';

export const BottomTaBarButtonsWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: ${(p) => p.theme.colors.black40};
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
