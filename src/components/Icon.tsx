import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useMemo } from 'react';
import { BoxProps } from './Box';
import { FlexBoxCenter } from './FlexBox';
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';
import styled, { css } from 'styled-components';
import {
    faAngleDown,
    faCirclePlus,
    faGhost,
    faMagnifyingGlass,
    faPencil,
    faQrcode,
    faShare,
    faX,
    faCheck,
    faGlobe,
    faWarehouse,
    faBell,
    faTrash,
    faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

export const dict: Record<string, IconDefinition> = {
    add: faCirclePlus,
    edit: faPencil,
    meta: faGhost,
    qr: faQrcode,
    'caret-down': faAngleDown,
    search: faMagnifyingGlass,
    share: faShare,
    x: faX,
    check: faCheck,
    public: faGlobe,
    warehouse: faWarehouse,
    feed: faBell,
    trash: faTrash,
    back: faChevronLeft,
};

export type IconType =
    | 'add'
    | 'check'
    | 'meta'
    | 'x'
    | 'trash'
    | 'public'
    | 'feed'
    | 'warehouse'
    | 'edit'
    | 'search'
    | 'share'
    | 'qr'
    | 'caret-down'
    | 'back';

export interface IconProps extends BoxProps {
    type: IconType;
    size?: '20' | 'm';
}

const SizeMixin = (size?: '20' | 'm') => {
    if (size === 'm') {
        return css`
            width: 30px;
            height: 30px;
            font-size: 25px;
            line-height: 30px;
        `;
    }
    return css`
        width: 20px;
        height: 20px;
        font-size: 15px;
        line-height: 20px;
    `;
};

const IconWrapper = styled(FlexBoxCenter)<{ size?: '20' | 'm' }>`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    letter-spacing: -0.02em;
    font-style: normal;
    font-weight: 900;
    ${(p) => SizeMixin(p.size)};
`;

export const Icon: FC<IconProps> = (props) => {
    const { type, size, ...boxProps } = props;
    const realName = useMemo(() => dict[type] ?? type, [type]);
    return (
        <IconWrapper {...boxProps} size={size}>
            <FontAwesomeIcon icon={realName as IconProp} />
        </IconWrapper>
    );
};
