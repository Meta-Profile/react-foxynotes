import styled from 'styled-components';

export const Input = styled.input`
    height: 48px;
    background-color: ${(p) => p.theme.colors.black5};
    border: 1px solid ${(p) => p.theme.colors.black5};
    outline: none !important;
    padding: 0 16px;
    border-radius: 3px;
    transition: all 0.2s;

    &::placeholder {
        color: ${(p) => p.theme.colors.black40};
    }

    color: ${(p) => p.theme.colors.black100};

    &:hover {
        border: 1px solid ${(p) => p.theme.colors.black10} !important;
    }

    &:focus,
    &:active {
        border: 1px solid ${(p) => p.theme.colors.black40} !important;
    }
`;
