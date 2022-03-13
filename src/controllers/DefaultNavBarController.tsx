import { DefaultNavBar } from 'components/DefaultNavBar';

import { FC } from 'react';
import { useNavigator } from '../hooks/useNavigator';

export interface DefaultNavBarControllerProps {
    onAction?: (action: string) => void;
}
export const DefaultNavBarController: FC<DefaultNavBarControllerProps> = (props) => {
    const { onAction } = props;
    const { states } = useNavigator();

    return (
        <DefaultNavBar
            title={states.title}
            backgroundColor={states.backgroundColor}
            foreColor={states.foreColor}
            back={true}
            onAction={onAction}
        />
    );
};
