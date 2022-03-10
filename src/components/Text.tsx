import styled, { css } from 'styled-components';
import { Box } from './Box';
import { FlexBox } from './FlexBox';
import { MobileConfig } from '../config/mobile';

export type TextType =
    | 'normal'
    | 'small'
    | 'nano'
    | 'title'
    | 'section'
    | 'title-medium'
    | 'title-big';

export interface TextProps {
    type?: TextType;
}

export const TextCss = {
    small: css`
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;

        @media (max-width: ${MobileConfig.breakpoint}px) {
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 17px;
        }
    `,
};

const TextSize = (type: TextType) => {
    switch (type) {
        case 'normal':
            return css`
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                line-height: 32px;
                letter-spacing: -0.02em;
                @media (max-width: ${MobileConfig.breakpoint}px) {
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 21px;
                }
            `;
        case 'title':
            return css`
                font-style: normal;
                font-weight: 600;
                font-size: 60px;
                line-height: 64px;
                letter-spacing: -0.02em;

                @media (max-width: ${MobileConfig.breakpoint}px) {
                    font-style: normal;
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 26px;
                }
            `;
        case 'section':
            return css`
                font-style: normal;
                font-weight: 600;
                font-size: 42px;
                line-height: 48px;
                letter-spacing: -0.02em;
            `;
        case 'title-medium':
            return css`
                font-style: normal;
                font-weight: 600;
                font-size: 85px;
                line-height: 96px;
                letter-spacing: -0.02em;
            `;
        case 'title-big':
            return css`
                font-style: normal;
                font-weight: 600;
                font-size: 108px;
                line-height: 104px;
                letter-spacing: -0.02em;
            `;
        case 'nano':
            return css`
                font-style: normal;
                font-weight: normal;
                font-size: 10px;
                line-height: 13px;
            `;
        case 'small':
        default:
            return TextCss.small;
    }
};

export const Text = styled(Box)<TextProps>`
    font-family: Montserrat, sans-serif;

    // Text size
    ${(p) => TextSize(p.type ?? 'small')};
`;

export const TextFlexBox = styled(FlexBox)<TextProps>`
    font-family: Montserrat, sans-serif;

    // Text size
    ${(p) => TextSize(p.type ?? 'small')};
`;
