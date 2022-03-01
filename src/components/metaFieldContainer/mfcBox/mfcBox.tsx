import { FC } from 'react';
import { MetaFieldContainer } from '../metaFieldContainer.styles';
import { FlexBox } from '../../ui/FlexBox';
import { Text } from '../../ui/Text';

export interface MetaFieldContainerTitleProps {
    title: string;
}

export const MFCBox: FC<MetaFieldContainerTitleProps> = (props) => {
    const { title, children } = props;
    return (
        <MetaFieldContainer>
            <FlexBox justify={'space-between'}>
                <Text type={'normal'}>{title}</Text>
            </FlexBox>
            {children}
        </MetaFieldContainer>
    );
};
