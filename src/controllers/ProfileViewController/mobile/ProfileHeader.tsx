import { FC } from 'react';
import {
    ProfileHeaderAvatar,
    ProfileHeaderAvatarContainer,
    ProfileHeaderAvatarInput,
    ProfileHeaderAvatarSmile,
    ProfileHeaderWrapper,
} from './styles';
import { FlexBox, Icon, Text } from '../../../components';
import { FlexBoxCenter } from '../../../components/FlexBox';

export interface ProfileHeaderProps {
    color?: string;
    avatar?: string;
    create?: true;
    onImageSelected?: (file: File) => void;
}
export const ProfileHeader: FC<ProfileHeaderProps> = ({
    children,
    onImageSelected,
    create,
    avatar,
}) => {
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
                    {!avatar && (
                        <ProfileHeaderAvatar style={{ background: 'rgba(0, 0,0, 0.3)' }}>
                            <Icon type={'meta'} size={'m'} />
                            <Text type={'nano'}>
                                Нажмите, <br />
                                чтобы выбрать аватар
                                <br />
                                мета-профиля
                            </Text>
                            <ProfileHeaderAvatarInput
                                type={'file'}
                                accept={'image/*'}
                                onChange={(ev) => {
                                    const files = ev.currentTarget.files;
                                    if (files && files.length > 0 && files[0])
                                        onImageSelected?.(files[0]);
                                }}
                            />
                        </ProfileHeaderAvatar>
                    )}
                    {avatar && <ProfileHeaderAvatar src={avatar} />}
                </ProfileHeaderAvatarContainer>
            )}
            {children}
        </ProfileHeaderWrapper>
    );
};
