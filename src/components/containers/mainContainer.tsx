import styled from 'styled-components';
import { FlexBoxColumn } from '../FlexBox';
import { Space } from '../Box';
import { MobileConfig } from '../../config/mobile';

/**
 * Главный контейнер
 */
export const MainContainer = styled(FlexBoxColumn)`
    width: 1152px;
    margin: 0 auto;
    gap: ${Space.default}px;
    z-index: 2;

    @media (max-width: ${MobileConfig.breakpoint}px) {
        width: 100%;
        padding: 0 8px;
    }
`;
