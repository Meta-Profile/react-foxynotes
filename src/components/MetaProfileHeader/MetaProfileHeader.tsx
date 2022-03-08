import { FC } from 'react';
import {
    MetaProfileHeaderAvatarContainer,
    MetaProfileHeaderAvatarSmile,
    MetaProfileHeaderAvatarWrapper,
    MetaProfileHeaderContainer,
    MetaProfileHeaderNavigatorWrapper,
    MetaProfileHeaderTitle,
    MetaProfileHeaderUpperLine,
    MetaProfileHeaderWrapper,
} from './styles';
import { FlexBox, FlexBoxColumn } from '../FlexBox';
import { Text } from '../Text';
import { Space } from '../Box';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { MFCHeaderNavigator } from './mfcHeaderNavigator';
import { MetaProfileCategory } from '../../api';

export interface MetaProfileHeaderProps {
    categories: MetaProfileCategory[];
    title?: string;
    onEditClick?: () => void;

    // category
    onCategorySelect?: (category: MetaProfileCategory) => void;
    activeCategoryId?: number;
}

export const MetaProfileHeader: FC<MetaProfileHeaderProps> = (props) => {
    const { categories, onEditClick, title, onCategorySelect, activeCategoryId } = props;
    return (
        <MetaProfileHeaderWrapper>
            <MetaProfileHeaderContainer>
                <MetaProfileHeaderUpperLine>
                    <FlexBoxColumn align={'flex-start'} color={'white'} opacity={0.7} gap={2}>
                        <FlexBox align={'center'} gap={Space.xsmall}>
                            <Icon type={'meta'} />
                            <Text type={'small'} style={{ fontWeight: 600 }}>
                                Локальный мета-профиль
                            </Text>
                        </FlexBox>
                        <Text type={'nano'}>Последнее изменение: 24.02.2022 в 14:40</Text>
                    </FlexBoxColumn>
                    <MetaProfileHeaderTitle>{title}</MetaProfileHeaderTitle>
                    <FlexBox gap={Space.small}>
                        <Button type={'secondary'} icon={'share'} />
                        <Button type={'secondary'} icon={'qr'} />
                        <Button type={'secondary'} icon={'edit'} onClick={onEditClick} />
                    </FlexBox>
                </MetaProfileHeaderUpperLine>
                <MetaProfileHeaderAvatarWrapper>
                    <MetaProfileHeaderAvatarContainer
                        url={
                            'https://yobte.ru/uploads/posts/2019-11/devushka-s-chernymi-glazami-i-chernymi-volosami-64-foto-7.jpg'
                        }
                    />
                    <MetaProfileHeaderAvatarSmile>😏</MetaProfileHeaderAvatarSmile>
                </MetaProfileHeaderAvatarWrapper>
                <MetaProfileHeaderNavigatorWrapper>
                    <MFCHeaderNavigator
                        categories={categories}
                        onCategorySelect={onCategorySelect}
                        activeCategoryId={activeCategoryId}
                    />
                </MetaProfileHeaderNavigatorWrapper>
            </MetaProfileHeaderContainer>
        </MetaProfileHeaderWrapper>
    );
};
