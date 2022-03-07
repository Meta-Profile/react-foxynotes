import styled, { keyframes } from 'styled-components';
import { FlexBoxColumn } from '../../FlexBox';
import { Space } from '../../Box';

export const ModalWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(21, 21, 20, 0.7);
    backdrop-filter: blur(20px);
`;

const ModalContainerWrapperAnimation = keyframes`
  0%{
    transform: translateY(-30px) scale(1.05);
    opacity: 0;
  }
  100%{
    transform: translateY(0px) scale(1);
    opacity: 1;
  }
`;

export const ModalContainerWrapper = styled(FlexBoxColumn)`
    align-items: center;
    flex: 1;
    gap: ${Space.default}px;
    padding: ${Space.default}px;
    background-color: ${(p) => p.theme.modal.backgroundColor};
    color: ${(p) => p.theme.modal.color};
    border-radius: 10px;
    min-width: 425px;
    max-width: 500px;
    animation: ${ModalContainerWrapperAnimation} 0.5s forwards;
`;
