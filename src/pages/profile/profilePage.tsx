import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { ProfilePageMainContainer, ProfilePageWrapper } from './styles';
import { MFCBox, MFCEmpty } from '../../components/metaFieldContainer';
import { metaprofilemock } from '../../tests/metaprofile.test';
import { ThemeProvider, useTheme } from 'styled-components';
import tinycolor2 from 'tinycolor2';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components/Footer';
import { MCAddMetaField } from '../../components/modals';
import { SliderPicker } from 'react-color';
import { CommonDataAPI, MetaProfile, MetaProfileAPI } from '../../api';
import { MetaProfileHeader } from '../../components/MetaProfileHeader';
import { useDebouncedCallback } from 'use-debounce';
import { useParams } from 'react-router-dom';

export const ProfilePage: FC = () => {
    const { t, i18n } = useTranslation();
    const { mpId, mpcId } = useParams<{ mpId: string; mpcId?: string }>();

    const [color, setColor] = useState('#000');
    const [profile, setProfile] = useState<MetaProfile>();
    const [activeCategory, setActiveCategory] = useState<number>(1);

    /**
     * Основной useEffect, который влияет на отображение мета-профиля
     */
    useEffect(() => {
        if (mpId) {
            MetaProfileAPI.get(mpId).then((value) => {
                setProfile(value.response);
                setColor(value.response.color);
            });
        }
    }, [mpId]);

    const update = useDebouncedCallback(() => {
        MetaProfileAPI.update(mpId, { color });
    }, 1000);

    const [isEdit, setIsEdit] = useState(false);
    const [modalAddFieldVisible, setModalAddFieldVisible] = useState(false);

    const categories = useMemo(
        () => profile?.composition.map((v) => v.category).sort((a, b) => a.mpcId - b.mpcId) ?? [],
        [profile]
    );

    // Themefy
    const theme: any = useTheme();
    const [newTheme, setNewTheme] = useState(theme);

    useEffect(() => {
        const source = tinycolor2(color);
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
        setNewTheme({
            banner: `linear-gradient(180deg, ${bannerColor.toHexString()} 0%, ${bannerColor
                .clone()
                .darken(5)
                .toHexString()} 100%)`,
            colors: {
                ...theme.colors,
                primary: primaryColor.toHexString(),
                secondary: secondaryColor.toHexString(),
            },
        });
    }, [theme, color]);

    const onEditButtonClick = useCallback(() => {
        setIsEdit(!isEdit);
    }, [isEdit]);

    if (!profile) return <div>Loading...</div>;

    return (
        <ThemeProvider theme={newTheme}>
            <ProfilePageWrapper>
                <MetaProfileHeader
                    title={profile.title}
                    categories={categories}
                    onEditClick={onEditButtonClick}
                    onCategorySelect={(category) => setActiveCategory(category.mpcId)}
                    activeCategoryId={activeCategory}
                />
                <ProfilePageMainContainer>
                    {isEdit && (
                        <MFCBox title={t('profile_color_chose')}>
                            <SliderPicker
                                color={color}
                                onChange={(v) => {
                                    setColor(v.hex);
                                    update();
                                }}
                            />
                        </MFCBox>
                    )}
                    {profile.composition.length < 1 && (
                        <MFCEmpty onAddClick={() => setModalAddFieldVisible(true)} />
                    )}
                    {profile.composition.map((category) => {
                        if (category.category.mpcId === activeCategory) {
                            return category.fields.map((field) => (
                                <MFCBox key={field.mpdId} title={field.field.title}>
                                    {JSON.stringify(field.data)}
                                </MFCBox>
                            ));
                        }
                    })}
                </ProfilePageMainContainer>
            </ProfilePageWrapper>
            <Footer />
            {modalAddFieldVisible && (
                <MCAddMetaField onClose={() => setModalAddFieldVisible(false)} />
            )}
        </ThemeProvider>
    );
};
