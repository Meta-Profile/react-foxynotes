import { FC } from 'react';
import {
    ProfileHeaderAvatar,
    ProfileHeaderAvatarContainer,
    ProfileHeaderAvatarSmile,
    ProfileHeaderWrapper,
} from './styles';
import { FlexBox, Icon, Text } from '../../../components';
import { FlexBoxCenter } from '../../../components/FlexBox';

export interface ProfileHeaderProps {
    color?: string;
    avatar?: string;
    create?: true;
}
export const ProfileHeader: FC<ProfileHeaderProps> = ({ children, create, avatar }) => {
    return (
        <ProfileHeaderWrapper>
            {!create && (
                <ProfileHeaderAvatarContainer>
                    <ProfileHeaderAvatar src={avatar} />
                    {!create && <ProfileHeaderAvatarSmile>😏</ProfileHeaderAvatarSmile>}
                </ProfileHeaderAvatarContainer>
            )}
            {create && (
                <ProfileHeaderAvatarContainer>
                    <ProfileHeaderAvatar style={{ background: 'rgba(0, 0,0, 0.3)' }}>
                        <Icon type={'meta'} size={'m'} />
                        <Text type={'nano'}>
                            Нажмите, <br />
                            чтобы выбрать аватар
                            <br />
                            мета-профиля
                        </Text>
                    </ProfileHeaderAvatar>
                </ProfileHeaderAvatarContainer>
            )}
            {children}
        </ProfileHeaderWrapper>
    );
};
