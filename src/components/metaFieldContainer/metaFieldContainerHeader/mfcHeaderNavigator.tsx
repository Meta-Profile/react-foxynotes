import { FC } from 'react';
import { MFCHeaderNavigatorWrapper } from './styles';
import { FlexBox } from '../../ui/FlexBox';
import { MFCategory } from '../../../app/api/classes/metaprofile/types';
import { Button } from '../../ui/Button';
import { IconType } from '../../ui/Icon';

export interface MFCHeaderNavigatorProps {
    categories: MFCategory[];
}

export const MFCHeaderNavigator: FC<MFCHeaderNavigatorProps> = (props) => {
    const { categories } = props;
    return (
        <MFCHeaderNavigatorWrapper>
            <FlexBox gap>
                {categories.map((value) => (
                    <Button type={'secondary'} icon={value.icon as IconType} key={value.mfcId}>
                        {value.title}
                    </Button>
                ))}
            </FlexBox>
        </MFCHeaderNavigatorWrapper>
    );
};
