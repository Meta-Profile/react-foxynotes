import { FC, useEffect, useMemo, useState } from 'react';
import { ProfilePageMainContainer, ProfilePageWrapper } from './styles';
import { MFCEmpty, MfcHeader } from '../../components/metaFieldContainer';
import { ProfileBanner } from '../../components/profileBanner';
import { metaprofilemock } from '../../app/api/classes/metaprofile/metaprofile.test';
import { ThemeProvider, useTheme } from 'styled-components';
import tinycolor2 from 'tinycolor2';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components/Footer';
import { MCAddMetaField } from '../../components/modals';

export const ProfilePage: FC = () => {
    const { t, i18n } = useTranslation();
    const profile = useMemo(() => (metaprofilemock as any)[i18n.language], [i18n.language]);
    const [modalAddFieldVisible, setModalAddFieldVisible] = useState(false);

    // Themefy
    const theme: any = useTheme();
    const [newTheme, setNewTheme] = useState(theme);

    useEffect(() => {
        const source = tinycolor2(profile.settings.color);
        const primaryColor = source;
        let secondaryColor = source.clone().lighten(28);
        const bannerColor = source.clone().desaturate(27);
        let i = 0;
        if (secondaryColor.isLight()) {
            while (!tinycolor2.isReadable(secondaryColor, primaryColor)) {
                primaryColor.darken(1);
                i++;
                if (i >= 100) break;
            }
        } else {
            while (!tinycolor2.isReadable(secondaryColor, primaryColor)) {
                primaryColor.brighten(1);
                i++;
                if (i >= 100) break;
            }
        }
        document
            .querySelectorAll('meta[name="theme-color"]')
            .forEach((value) => value.setAttribute('content', bannerColor.toHexString()));

        setNewTheme({
            banner: bannerColor.toHexString(),
            colors: {
                ...theme.colors,
                primary: primaryColor.toHexString(),
                secondary: secondaryColor.toHexString(),
            },
        });
    }, [theme, profile]);

    return (
        <ThemeProvider theme={newTheme}>
            <ProfilePageWrapper>
                <ProfileBanner
                    isEditable={true}
                    isQrcode={true}
                    isSharable={true}
                    name={profile.title}
                />
                <ProfilePageMainContainer>
                    <MfcHeader type={profile.type} categories={profile.categories} />
                    <MFCEmpty onAddClick={() => setModalAddFieldVisible(true)} />
                    {/* <MFCBox title={t('profile_color_chose')}>
                        <SliderPicker
                            color={color}
                            onChange={(v) => {
                                setColor(v.hex);
                            }}
                        />
                    </MFCBox>*/}
                </ProfilePageMainContainer>
            </ProfilePageWrapper>
            <Footer />
            {modalAddFieldVisible && (
                <MCAddMetaField onClose={() => setModalAddFieldVisible(false)} />
            )}
        </ThemeProvider>
    );
};
