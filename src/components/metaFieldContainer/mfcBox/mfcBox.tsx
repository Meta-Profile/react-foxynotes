import { FC, useEffect, useMemo, useState } from 'react';
import { MetaFieldContainer } from '../metaFieldContainer.styles';
import { FlexBox } from '../../FlexBox';
import { Text } from '../../Text';
import { Button } from '../../Button';
import { Space } from '../../Box';

export interface MetaFieldContainerTitleProps {
    title: string;
    isEditMode?: boolean;
    onEditRequest?: (value: string) => void;
}

export const MFCBox: FC<MetaFieldContainerTitleProps> = (props) => {
    const { title, children, isEditMode, onEditRequest } = props;
    const [isEdit, setIsEdit] = useState(false);
    const baseChildren = useMemo(() => children, []);

    useEffect(() => {
        if (!isEditMode) setIsEdit(false);
    }, [isEditMode]);

    const isEditingNow = isEdit && isEditMode;
    return (
        <MetaFieldContainer>
            <FlexBox justify={'space-between'} height={48} align={'center'}>
                <Text type={'normal'}>{title}</Text>
                {isEditMode && !isEdit && (
                    <Button onClick={() => setIsEdit(true)} icon={'edit'} type={'primary'} />
                )}
                {isEditingNow && (
                    <FlexBox gap={Space.small}>
                        <Button type={'grey'} onClick={() => setIsEdit(false)} icon={'check'} />
                        <Button type={'grey'} onClick={() => setIsEdit(false)} icon={'x'} />
                        <Button type={'grey'} onClick={() => setIsEdit(false)} icon={'trash'} />
                    </FlexBox>
                )}
            </FlexBox>
            {isEditingNow ? <textarea>{baseChildren}</textarea> : children}
        </MetaFieldContainer>
    );
};
