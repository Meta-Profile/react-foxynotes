import { ViewControllerProps } from '../CoreViewController';
import { DefaultViewController } from '../DefaultViewController';
import { FC } from 'react';

export const HomeViewController: FC<ViewControllerProps> = (props) => {
    const { children, ...appState } = props;
    return <DefaultViewController {...appState}>hvc</DefaultViewController>;
};
