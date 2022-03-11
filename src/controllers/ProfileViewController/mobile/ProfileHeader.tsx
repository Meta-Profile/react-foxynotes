import { FC } from 'react';
import {
    ProfileHeaderAvatar,
    ProfileHeaderAvatarContainer,
    ProfileHeaderAvatarSmile,
    ProfileHeaderWrapper,
} from './styles';

export interface ProfileHeaderProps {
    color?: string;
    avatar?: string;
}
export const ProfileHeader: FC<ProfileHeaderProps> = ({ children, avatar }) => {
    return (
        <ProfileHeaderWrapper>
            <ProfileHeaderAvatarContainer>
                <ProfileHeaderAvatar src={avatar} />
                <ProfileHeaderAvatarSmile>😏</ProfileHeaderAvatarSmile>
            </ProfileHeaderAvatarContainer>
            {children}
        </ProfileHeaderWrapper>
    );
};
