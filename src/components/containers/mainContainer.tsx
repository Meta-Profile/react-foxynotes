import styled from 'styled-components';
import { FlexBoxColumn } from '../ui/FlexBox';
import { Space } from '../ui/Box';

/**
 * Главный контейнер
 */
export const MainContainer = styled(FlexBoxColumn)`
    width: 1152px;
    margin: 0 auto;
    gap: ${Space.default}px;
    z-index: 2;
`;
