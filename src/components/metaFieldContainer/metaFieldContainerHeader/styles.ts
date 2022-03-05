import styled from 'styled-components';

export const MetaFieldContainerHeaderAvatar = styled.div`
    background: #fefefe;
    border: 2px dashed ${(p) => p.theme.colors.primary};
    box-sizing: border-box;
    border-radius: 1000px;
    width: 180px;
    height: 180px;
    padding: 4px;
    position: relative;
`;
export const MetaFieldContainerHeaderAvatarContent = styled.div`
    border-radius: 1000px;
    width: 100%;
    height: 100%;
    background: url('https://i.pinimg.com/564x/90/db/a2/90dba282631f0bd9a966ebe6258e8491.jpg');
    background-size: cover;
`;
export const MetaFieldContainerHeaderSmile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    text-align: center;
    position: absolute;
    width: 30px;
    height: 30px;
    left: 75px;
    top: 159px;

    font-size: 20px;
    line-height: 20px;

    /* White */
    background: #fefefe;
    border-radius: 100px;
`;

export const MFCHeaderNavigatorWrapper = styled.div`
    height: 40px;
    max-height: 40px;
    min-height: 40px;
    overflow-x: scroll;
`;
