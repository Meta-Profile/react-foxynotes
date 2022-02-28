import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useMemo } from 'react';
import { Box, BoxProps } from './Box';
import { FlexBox } from './FlexBox';
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';
import styled from 'styled-components';
import {
    faAngleDown,
    faCirclePlus,
    faGhost,
    faMagnifyingGlass,
    faPencil,
    faQrcode
} from '@fortawesome/free-solid-svg-icons';

export const dict: Record<string, IconDefinition> = {
    add: faCirclePlus,
    edit: faPencil,
    meta: faGhost,
    qr: faQrcode,
    'caret-down': faAngleDown,
    search: faMagnifyingGlass
};

export type IconType =
    | 'add'
    | 'check'
    | 'meta'
    | 'x'
    | 'trash'
    | 'edit'
    | 'search'
    | 'share'
    | 'qr'
    | 'caret-down';

export interface IconProps extends BoxProps {
    type: IconType;
}

const IconWrapper = styled(FlexBox)`
    width: 20px;
    height: 20px;
    font-size: 15px;
    line-height: 20px;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    letter-spacing: -0.02em;
`;

export const Icon: FC<IconProps> = (props) => {
    const { type, ...boxProps } = props;
    const realName = useMemo(() => dict[type] ?? type, [type]);
    return (
        <IconWrapper {...boxProps} justify={'center'} align={'center'} width={20} height={20}>
            <FontAwesomeIcon icon={realName as IconProp} />
        </IconWrapper>
    );
};
