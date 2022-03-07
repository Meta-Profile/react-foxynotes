import styled from 'styled-components';
import { FlexBoxColumn } from '../FlexBox';
import { Space } from '../Box';

/**
 * Главный контейнер
 */
export const MainContainer = styled(FlexBoxColumn)`
    width: 1152px;
    margin: 0 auto;
    gap: ${Space.default}px;
    z-index: 2;
`;
