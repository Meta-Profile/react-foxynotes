import { FC } from 'react';
import { MFCHeaderNavigatorWrapper } from './styles';
import { FlexBox } from '../../FlexBox';
import { MetaProfileCategory } from '../../../api/classes/metaprofile/types';
import { Button } from '../../Button';
import { IconType } from '../../Icon';

export interface MFCHeaderNavigatorProps {
    categories: MetaProfileCategory[];
}

export const MFCHeaderNavigator: FC<MFCHeaderNavigatorProps> = (props) => {
    const { categories } = props;
    return (
        <MFCHeaderNavigatorWrapper>
            <FlexBox gap>
                {categories.map((value) => (
                    <Button type={'secondary'} icon={value.icon as IconType} key={value.mpcId}>
                        {value.title}
                    </Button>
                ))}
            </FlexBox>
        </MFCHeaderNavigatorWrapper>
    );
};
