import { ViewControllerProps } from '../CoreViewController';
import { FC } from 'react';
import ProfilePage from '../../pages/profile';

export const ProfileViewController: FC<ViewControllerProps> = (props) => {
    const { isMobile, isStandalone } = props;
    return <ProfilePage />;
};
