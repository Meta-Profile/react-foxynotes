import styled, { css } from 'styled-components';
import { Box, SpaceType, SpacingMixin } from './Box';

export type FlexBoxJustify =
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-between'
    | 'space-around';

export interface FlexBoxProps {
    column?: boolean;
    gap?: SpaceType;
    justify?: FlexBoxJustify;
    align?: FlexBoxJustify;
}

const FlexBoxStyleEnum = (keyword: string, item?: string) => {
    if (!item) return null;
    return css`
        ${keyword}: ${item}
    `;
};

export const FlexBox = styled(Box)<FlexBoxProps>`
    display: flex;
    flex-direction: ${(p) => (p.column ? 'column' : 'row')};

    // Gap settings
    ${(p) => SpacingMixin('gap', p.gap)};

    // Е нумераторы
    ${(p) => FlexBoxStyleEnum('justify-content', p.justify)};
    ${(p) => FlexBoxStyleEnum('align-items', p.align)};
`;
