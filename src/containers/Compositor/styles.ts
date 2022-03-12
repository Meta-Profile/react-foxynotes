import styled from 'styled-components';
import { animated } from 'react-spring';

export const CompositorFun = styled.div`
    position: relative;
    display: flex;
    height: calc(100vh - 85px);
    min-height: calc(100vh - 85px);
    max-height: calc(100vh - 85px);
    overflow: hidden;
    width: 100vw;
    min-width: 100vw;
    max-width: 100vw;
`;
//height: ${(p) => (p.pwa ? 85 : 50)}px;
export const CompositorContainerWrapper = styled(animated.div)<{ lockScroll?: boolean }>`
    background-color: ${(p) => p.theme.colors.black95};
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    min-width: 100vw;
    max-width: 100vw;
    height: calc(100vh - 85px);
    max-height: calc(100vh - 85px);
    min-height: calc(100vh - 85px);
    overflow: ${(p) => (p.lockScroll ? 'hidden' : 'auto')};
`;
