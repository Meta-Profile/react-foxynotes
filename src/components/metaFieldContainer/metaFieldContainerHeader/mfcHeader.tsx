import { FC } from 'react';
import { MetaFieldContainer } from '../metaFieldContainer.styles';
import { FlexBox, FlexBoxCenter, FlexBoxColumn } from '../../FlexBox';
import { Text } from '../../Text';
import {
    MetaFieldContainerHeaderAvatar,
    MetaFieldContainerHeaderAvatarContent,
    MetaFieldContainerHeaderSmile,
} from './styles';
import { MFCHeaderNavigator, MFCHeaderNavigatorProps } from './mfcHeaderNavigator';
import { MFType } from '../../../api/classes/metaprofile/types';
import { Icon, IconType } from '../../Icon';

export interface MfcHeaderProps extends MFCHeaderNavigatorProps {
    type: MFType;
}

export const MfcHeader: FC<MfcHeaderProps> = (props) => {
    const { type, categories } = props;
    return (
        <MetaFieldContainer>
            <FlexBox justify={'space-between'}>
                <FlexBoxColumn flex={1}> </FlexBoxColumn>
                <FlexBoxCenter flex={1}>
                    <MetaFieldContainerHeaderAvatar>
                        <MetaFieldContainerHeaderAvatarContent />
                        <MetaFieldContainerHeaderSmile>😏</MetaFieldContainerHeaderSmile>
                    </MetaFieldContainerHeaderAvatar>
                </FlexBoxCenter>
                <FlexBoxColumn align={'flex-end'} flex={1} color={'black40'}>
                    <FlexBox gap={4}>
                        <Text>{type.title}</Text>
                        <Icon type={type.icon as IconType} />
                    </FlexBox>
                    <Text type={'nano'}>Последнее изменение: 24.02.2022 в 14:40</Text>
                </FlexBoxColumn>
            </FlexBox>
            <MFCHeaderNavigator categories={categories} />
        </MetaFieldContainer>
    );
};
