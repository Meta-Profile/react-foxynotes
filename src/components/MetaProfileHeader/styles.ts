import styled from 'styled-components';
import { Space } from '../Box';

export const MetaProfileHeaderWrapper = styled.div`
    display: flex;
    justify-content: center;

    /* Local Gradient */
    background: ${(p) => p.theme.banner};
    padding: 16px 16px 40px;
`;

export const MetaProfileHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${Space.default}px;
    width: 1152px;
    max-width: 1152px;
    min-width: 1152px;
    align-items: center;
`;

export const MetaProfileHeaderUpperLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
`;

export const MetaProfileHeaderTitle = styled.div`
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 64px;
    margin-top: -11px;
    justify-content: center;
    /* or 107% */

    display: flex;
    align-items: flex-end;
    text-align: center;
    letter-spacing: -0.02em;

    color: #ffffff;
`;

export const MetaProfileHeaderAvatarWrapper = styled.div`
    /* White */

    border: 2px dashed ${(p) => p.theme.colors.secondary};
    box-sizing: border-box;
    border-radius: 1000px;
    position: relative;
`;

export const MetaProfileHeaderAvatarContainer = styled.div<{ url?: string }>`
    /* White */

    background: #c4c4c4;
    border-radius: 1000px;
    width: 168px;
    height: 168px;

    background: url('${(p) => p.url}');
    background-size: cover;
    background-position: center center;
    margin: 4px;
`;

export const MetaProfileHeaderAvatarSmile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    position: absolute;
    width: 46px;
    height: 46px;
    left: 67px;
    top: 151px;
    padding-top: 4px;

    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 30px;

    /* White */
    background: ${(p) => p.theme.colors.white};
    border-radius: 100px;
`;

export const MetaProfileHeaderNavigatorWrapper = styled.div`
    padding-top: 16px;
    padding-bottom: 32px;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
`;
export const MFCHeaderNavigatorWrapper = styled.div`
    height: 40px;
    max-height: 40px;
    min-height: 40px;
    overflow-x: scroll;
    max-width: 100%;
    margin: 0 auto;
`;
