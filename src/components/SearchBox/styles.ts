import styled from 'styled-components';
import { TextCss } from '../Text';

export const SearchBoxWrapper = styled.div`
    .rc__control {
        background-color: ${(p) => p.theme.colors.black5};
        border: 1px solid ${(p) => p.theme.colors.black5};
        outline: none !important;
        border-radius: 3px;
        border-color: ${(p) => p.theme.colors.black5};
        box-shadow: none !important;
        width: 100%;
        padding-right: 12px;

        .rc__placeholder,
        &::placeholder {
            color: ${(p) => p.theme.colors.black40};
        }

        color: ${(p) => p.theme.colors.black100};

        &:hover {
            border: 1px solid ${(p) => p.theme.colors.black10} !important;

            .rc__control-search {
                color: ${(p) => p.theme.colors.black40};
            }
        }

        .rc__control-search {
            color: ${(p) => p.theme.colors.black20};
            transition: all 0.2s;
            align-self: flex-start;
            height: 48px;
            display: flex;
            align-items: center;
        }

        &.rc__control--is-focused {
            border: 1px solid ${(p) => p.theme.colors.black40} !important;

            .rc__control-search {
                color: ${(p) => p.theme.colors.black70} !important;
            }
        }

        &.rc__control--menu-is-open {
            border-radius: 3px 3px 0 0;
        }
    }

    .rc__menu {
        background-color: ${(p) => p.theme.colors.white};
        margin-top: 0;
        border-radius: 0 0 3px 3px;
        box-shadow: none !important;
        border: 1px solid ${(p) => p.theme.colors.black40} !important;
        border-top: none !important;

        .rc__menu-list {
            padding: 0;

            .rc__option {
                transition: all 0.2s;

                &.rc__option--is-focused {
                    background-color: ${(p) => p.theme.colors.secondary};
                    opacity: 0.9;
                }

                &.rc__option--is-selected {
                    background-color: ${(p) => p.theme.colors.secondary};
                    color: ${(p) => p.theme.colors.primary};
                }

                height: 48px;
                ${TextCss.small};
                padding: 0 16px;
                display: flex;
                align-items: center;
            }
        }
    }

    .rc__value-container {
        height: 48px;
        padding: 0px 8px;
        ${TextCss.small};
    }

    .rc__value-container--is-multi {
        gap: 8px;
        height: auto;
        min-height: 48px;
        padding: 8px 8px;
    }

    .rc__multi-value {
        height: 30px;
        background-color: ${(p) => p.theme.colors.secondary};
        color: ${(p) => p.theme.colors.primary};
        display: flex;
        border-radius: 30px;
        margin: 0;
        align-items: center;
        ${TextCss.small};
        padding: 0 16px;
        padding-right: 12px;
    }
`;
