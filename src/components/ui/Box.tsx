import styled, { css, DefaultTheme } from 'styled-components';
import { ColorType } from '../../app/theme/types';
import { defaultTheme } from '../../app/theme/defaultTheme';

export enum Space {
    small = 8,
    default = 16,
    large = 32
}

export type SpaceType = boolean | Space | number;

export interface BoxProps {
    color?: ColorType;
    backgroundColor?: ColorType;
    padding?: SpaceType;
    margin?: SpaceType;
    width?: number | string;
    minWidth?: number | string;
    maxWidth?: number | string;
    height?: number | string;
    minHeight?: number | string;
    maxHeight?: number | string;
}

/**
 * Утилита для работы со SpaceType
 *
 * @param keyword
 * @param value
 * @constructor
 */
export const SpacingMixin = (keyword: string, value?: SpaceType) => {
    if (!value) return null;
    if (typeof value === 'number')
        return css`
            ${keyword}: ${value}px;
        `;
    return css`
        ${keyword}: ${Space.default}px;
    `;
};

export const ColorMixin = (keyword: string, color?: ColorType, theme?: typeof defaultTheme) => {
    if (!color || !theme) return null;
    return css`
        ${keyword}: ${theme.colors[color]}
    `;
};

export const SizeMixin = (keyword: string, value?: number | string) => {
    if (!value) return null;
    if (typeof value === 'number')
        return css`
            ${keyword}: ${value}px
        `;
    return css`
        ${keyword}: ${value}
    `;
};

export const Box = styled.div<BoxProps>`
    // Спейсеры
    ${(p) => SpacingMixin('margin', p.margin)};
    ${(p) => SpacingMixin('padding', p.padding)};

    // Цвета
    ${(p) => ColorMixin('color', p.color, p.theme)};
    ${(p) => ColorMixin('background-color', p.backgroundColor, p.theme)};

    // Размеры
    ${(p) => SizeMixin('width', p.width)};
    ${(p) => SizeMixin('min-width', p.minWidth)};
    ${(p) => SizeMixin('max-width', p.maxWidth)};
    ${(p) => SizeMixin('height', p.height)};
    ${(p) => SizeMixin('min-height', p.minHeight)};
    ${(p) => SizeMixin('max-height', p.maxHeight)};
`;
