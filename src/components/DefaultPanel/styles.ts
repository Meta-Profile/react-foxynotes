import styled from 'styled-components';
import { FlexBox } from '../FlexBox';

export const DefaultPanelContainer = styled(FlexBox)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: ${(p) => p.theme.colors.white};
    gap: 16px;
    padding: 16px;
    border-radius: 10px;
    overflow: hidden;
`;

export const DefaultPanelFooterContainer = styled.div`
    display: flex;
    width: calc(100% + 32px);
    padding: 16px;
    background: ${(p) => p.theme.colors.secondary};
    margin-bottom: -16px;
    justify-content: center;
`;
