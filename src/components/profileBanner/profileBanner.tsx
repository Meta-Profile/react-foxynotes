import { Text } from '../ui/Text';
import { FC } from 'react';
import { ProfileBannerToolboxContainer, ProfileBannerWrapper } from './profileBanner.styles';
import { ProfileToolbox, ProfileToolboxProps } from '../profileToolbox/profileToolbox';

export interface ProfileBannerProps extends ProfileToolboxProps {
    name: string;
}

export const ProfileBanner: FC<ProfileBannerProps> = (props) => {
    const { name, ...toolBoxProps } = props;
    return (
        <ProfileBannerWrapper>
            <Text type={'title'} color={'white'}>
                {name}
            </Text>
            <ProfileBannerToolboxContainer>
                <ProfileToolbox {...toolBoxProps} />
            </ProfileBannerToolboxContainer>
        </ProfileBannerWrapper>
    );
};
