import styled from 'styled-components';

export const ImageCropperCircleWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(21, 21, 20, 1);
    z-index: 1000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;

    * {
        user-select: none;
    }
`;

export const ImageCropperClose = styled.div`
    position: absolute;
    bottom: 86px;
    left: 0;
    right: 0;
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    z-index: 10000000;
    * {
        flex: 1 1;
    }
    padding: 16px;
`;
