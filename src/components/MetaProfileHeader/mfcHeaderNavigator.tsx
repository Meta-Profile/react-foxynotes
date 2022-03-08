import { FC } from 'react';
import { FlexBox } from '../FlexBox';
import { Button } from '../Button';
import { IconType } from '../Icon';
import { MetaProfileCategory } from '../../api';
import { MFCHeaderNavigatorWrapper } from './styles';

export interface MFCHeaderNavigatorProps {
    categories: MetaProfileCategory[];
    onCategorySelect?: (category: MetaProfileCategory) => void;
    activeCategoryId?: number;
}

export const MFCHeaderNavigator: FC<MFCHeaderNavigatorProps> = (props) => {
    const { categories, onCategorySelect, activeCategoryId } = props;
    return (
        <MFCHeaderNavigatorWrapper>
            <FlexBox gap>
                {categories.map((value) => (
                    <Button
                        type={activeCategoryId === value.mpcId ? 'secondary' : 'grey'}
                        icon={value.icon as IconType}
                        key={value.mpcId}
                        onClick={() => onCategorySelect?.(value)}>
                        {value.title}
                    </Button>
                ))}
            </FlexBox>
        </MFCHeaderNavigatorWrapper>
    );
};
