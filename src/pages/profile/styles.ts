import styled from 'styled-components';
import { FlexBoxColumn } from '../../components/FlexBox';
import { MainContainer } from '../../components/containers';

export const ProfilePageWrapper = styled(FlexBoxColumn)`
    min-height: 100vh;
    background-color: ${(p) => p.theme.colors.black95};
`;

export const ProfilePageMainContainer = styled(MainContainer)`
    margin-top: -45px;
`;
