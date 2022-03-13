import styled, { keyframes } from 'styled-components';

export const AnimationKeyframes = keyframes`
  0%   {transform: translate3d(0,0,0) scale3d(1,1,1);}
  40%  {transform: translate3d(0,30%,0) scale3d(.7,1.5,1);}
  100% {transform: translate3d(0,100%,0) scale3d(1.5,.7,1);}
`;

export const DefaultLoadingContainerWrapper = styled.div`
    position: fixed;
    top: -10px;
    left: -10px;
    right: -20px;
    bottom: -20px;
    z-index: 10000000;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: rgba(21, 21, 20, 0.8);
    backdrop-filter: blur(10px);
`;

export const Animated = styled.div`
    transform-origin: 50% 50%;
    margin-top: -100px;
    margin-bottom: 20px;
    animation: ${AnimationKeyframes} 0.6s linear alternate infinite;
`;
