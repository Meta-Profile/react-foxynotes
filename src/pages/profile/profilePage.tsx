import { FC, useEffect, useMemo } from 'react';
import { ProfilePageMainContainer, ProfilePageWrapper } from './styles';
import { MFCEmpty, MfcHeader } from '../../components/metaFieldContainer';
import { ProfileBanner } from '../../components/profileBanner';
import { metaprofilemock } from '../../app/api/classes/metaprofile/metaprofile.test';
import { ThemeProvider } from 'styled-components';
import tinycolor2 from 'tinycolor2';

export const ProfilePage: FC = () => {
    const profile = useMemo(() => metaprofilemock, []);
    useEffect(() => {
        document
            .querySelectorAll('meta[name="theme-color"]')
            .forEach((value) => value.setAttribute('content', profile.settings.color));
        const source = tinycolor2(profile.settings.color);
        console.log(source);
    }, [profile]);
    return (
        <ThemeProvider theme={{ banner: profile.settings.color }}>
            <ProfilePageWrapper>
                <ProfileBanner
                    isEditable={true}
                    isQrcode={true}
                    isSharable={true}
                    name={profile.title}
                />
                <ProfilePageMainContainer>
                    <MfcHeader type={profile.type} categories={profile.categories} />
                    <MFCEmpty />
                </ProfilePageMainContainer>
            </ProfilePageWrapper>
        </ThemeProvider>
    );
};
