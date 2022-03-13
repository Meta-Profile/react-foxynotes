import styled from 'styled-components';

export const ProfileHeaderWrapper = styled.div<{ backgroundColor?: string }>`
    background: ${(p) => p.theme.banner};
    padding: 16px;
    padding-top: 66px;
    padding-bottom: 32px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

export const ProfileHeaderAvatar = styled.div<{ src?: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 168px;
    height: 168px;
    background: url('${(p) => p.src}') center center;
    background-size: cover;
    box-sizing: border-box;
    margin: 4px;
    border-radius: 1000px;
    color: ${(p) => p.theme.colors.secondary};
    text-align: center;
    gap: 8px;
`;

export const ProfileHeaderAvatarContainer = styled.div`
    position: relative;
    border-radius: 1000px;
    border: 2px dashed ${(p) => p.theme.colors.secondary};
    margin-bottom: 20px;
`;

export const ProfileHeaderAvatarInput = styled.input`
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`;

export const ProfileContainerWrapper = styled.div``;
export const ProfileContainerLine = styled.div`
    height: 32px;
    width: 100%;
    background: ${(p) => p.theme.banner};
`;
export const ProfileContainerBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 8px;
    margin-top: -32px;
`;

export const ProfileHeaderAvatarSmile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 5;

    text-align: center;
    position: absolute;
    width: 46px;
    height: 46px;
    left: 67px;
    top: 151px;

    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 30px;

    /* White */
    background: ${(p) => p.theme.colors.white};
    border-radius: 100px;
`;
