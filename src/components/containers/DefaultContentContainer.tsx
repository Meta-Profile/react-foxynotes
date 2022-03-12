import styled from 'styled-components';

export const DefaultContentContainer = styled.div<{ startOffset?: number }>`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 8px;
    margin-top: ${(p) => p.startOffset ?? 0}px;
`;
