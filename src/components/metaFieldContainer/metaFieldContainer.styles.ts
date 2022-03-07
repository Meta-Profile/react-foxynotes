import styled from 'styled-components';
import { FlexBoxColumn, FlexBoxProps } from '../FlexBox';
import { Space } from '../Box';

export const MetaFieldContainer = styled(FlexBoxColumn)<FlexBoxProps>`
    padding: ${Space.default}px;
    gap: ${Space.default}px;
    background-color: ${(p) => p.backgroundColor ?? p.theme.colors.white};
    border-radius: 10px;
`;
