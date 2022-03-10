import styled from 'styled-components';

export const LoginViewWrapperMobile = styled.div`
    background-color: ${(p) => p.theme.colors.whiteAbsolute};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 8px;
    padding-top: 100px;
    gap: 16px;
`;

export const LoginViewFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    padding: 16px;
`;
