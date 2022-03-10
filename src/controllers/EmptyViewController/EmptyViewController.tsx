import { ViewControllerProps } from '../CoreViewController';
import { FC } from 'react';

export const EmptyViewController: FC<ViewControllerProps> = (props) => {
    const { isMobile, isStandalone } = props;
    return <div>hvc</div>;
};
