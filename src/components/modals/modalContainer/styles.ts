import styled from 'styled-components';
import { FlexBoxColumn } from '../../ui/FlexBox';
import { Space } from '../../ui/Box';

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
`;
