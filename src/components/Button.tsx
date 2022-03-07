import styled, { css } from 'styled-components';
import { defaultTheme } from '../theme/defaultTheme';
import { FC } from 'react';
import { BoxProps, Space } from './Box';
import { FlexBox } from './FlexBox';
import { Icon, IconType } from './Icon';

export type ButtonType = 'primary' | 'secondary' | 'grey' | 'black';

export interface ButtonProps extends BoxProps {
    type?: ButtonType;
    icon?: IconType;
    onClick?: () => void;
    disabled?: boolean;
}

const ButtonTypeMixin = (type?: ButtonType, theme?: typeof defaultTheme) => {
    if (!theme) return null;
    switch (type) {
        case 'primary':
        default:
            return css`
                color: ${theme.colors.secondary};
                background-color: ${theme.colors.primary};
            `;
        case 'secondary':
            return css`
                color: ${theme.colors.primary};
                background-color: ${theme.colors.secondary};
            `;
        case 'grey':
            return css`
                color: ${theme.colors.black90};
                background-color: ${theme.colors.black10};
            `;
        case 'black':
            return css`
                color: ${theme.colors.white};
                background-color: ${theme.colors.black100};
            `;
    }
};

const ButtonPaddingMixin = (icon?: IconType, content?: any) => {
    if (!icon && !content) return null;
    if (!icon && content)
        return css`
            padding: 8px 16px;
        `;
    if (icon && content)
        return css`
            padding: 8px 16px 8px 10px;
        `;
    if (icon && !content)
        return css`
            padding: 8px 10px;
        `;
};

export const ButtonWrapper = styled(FlexBox)<ButtonProps & { flag: boolean }>`
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    height: 40px;
    max-height: 40px;
    min-height: 40px;
    user-select: none;
    cursor: pointer;
    flex-shrink: 0;
    ${(p) => ButtonTypeMixin(p.type, p.theme)};
    ${(p) => ButtonPaddingMixin(p.icon, p.flag)};

    ${(p) =>
        p.disabled
            ? css`
                  //color: ${p.theme.colors.black70} !important;
                  //background-color: ${p.theme.colors.black20} !important;
                  opacity: 0.8;
                  cursor: not-allowed;
              `
            : null};
`;

export const Button: FC<ButtonProps> = (props) => {
    const { children, onClick, disabled, ...wrapperProps } = props;
    return (
        <ButtonWrapper
            disabled={disabled}
            onClick={onClick && !disabled ? onClick : undefined}
            {...wrapperProps}
            flag={!!children}
            gap={Space.small}>
            {wrapperProps.icon ? <Icon type={wrapperProps.icon} /> : null}
            {children}
        </ButtonWrapper>
    );
};
