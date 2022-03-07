import styled from 'styled-components';

export const Divider = styled.div`
    width: 100%;
    min-height: 1px;
    max-height: 1px;
    height: 1px;
    background-color: ${(p) => p.theme.colors.black10};
`;
