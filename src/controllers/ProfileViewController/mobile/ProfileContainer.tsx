import { FC } from 'react';
import { ProfileContainerBody, ProfileContainerLine, ProfileContainerWrapper } from './styles';

export const ProfileContainer: FC = ({ children }) => {
    return (
        <ProfileContainerWrapper>
            <ProfileContainerLine />
            <ProfileContainerBody>{children}</ProfileContainerBody>
        </ProfileContainerWrapper>
    );
};
