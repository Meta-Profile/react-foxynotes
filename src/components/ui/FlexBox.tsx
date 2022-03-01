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
    flex?: number | string;
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

    ${(p) =>
        p.flex
            ? css`
                  flex: ${p.flex};
              `
            : null};
`;

/**
 * Флекс бокс колонка
 */
export const FlexBoxColumn = styled(FlexBox)<FlexBoxProps>`
    flex-direction: column;
`;

/**
 * Полностью о центрованный флекс бокс
 */
export const FlexBoxCenter = styled(FlexBox)<FlexBoxProps>`
    justify-content: center;
    align-items: center;
`;
