import styled from 'styled-components';
import { FlexBox } from '../FlexBox';

export const ProfileBannerWrapper = styled(FlexBox)`
    justify-content: center;
    background: ${(p) => p.theme.banner};
    height: 195px;
    width: 100%;
    padding-top: 43px;
    position: relative;
`;

export const ProfileBannerToolboxContainer = styled.div`
    position: absolute;
    bottom: 16px;
    right: 16px;
`;
