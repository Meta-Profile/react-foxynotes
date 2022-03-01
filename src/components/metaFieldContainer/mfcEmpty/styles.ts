import styled from 'styled-components';
import { MetaFieldContainer } from '../metaFieldContainer.styles';
import { Space } from '../../ui/Box';

export const MFCEmptyWrapper = styled(MetaFieldContainer)`
    user-select: none;
    background-color: ${(p) => p.theme.colors.secondary} !important;
    gap: ${Space.large}px !important;
    padding: ${Space.large}px !important;
    justify-content: center;
    align-items: center;
`;

export const MFCEmptyButtonWrapper = styled.div`
    margin-top: 16px;
`;
