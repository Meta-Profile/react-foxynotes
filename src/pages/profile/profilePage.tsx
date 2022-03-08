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
import { SearchBox } from '../../components';
import { useApiCommonSearch } from '../../hooks/useApiCommonSearch';
import { CommonDataAPI, MetaProfile, MetaProfileAPI } from '../../api';
import { ActionMeta, OnChangeValue } from 'react-select';
import { NavBar } from '../../components/NavBar';
import { MetaProfileHeader } from '../../components/MetaProfileHeader';
import { useDebounce, useDebouncedCallback } from 'use-debounce';

export const ProfilePage: FC = () => {
    const { t, i18n } = useTranslation();
    const profile = useMemo(() => (metaprofilemock as any)[i18n.language], [i18n.language]);
    const [color, setColor] = useState('#000');
    const [prof, setProfile] = useState<MetaProfile>();
    const [activeCategory, setActiveCategory] = useState<number>(1);

    const update = useDebouncedCallback(() => {
        MetaProfileAPI.update(1, { color });
    }, 1000);

    const [isEdit, setIsEdit] = useState(false);
    const [modalAddFieldVisible, setModalAddFieldVisible] = useState(false);

    const categories = useMemo(
        () => prof?.composition.map((v) => v.category).sort((a, b) => a.mpcId - b.mpcId) ?? [],
        [prof]
    );

    const [sv, ssv] = useState<{ label: string; value: string }[]>([]);
    const commonSearch = useApiCommonSearch();

    useEffect(() => {
        MetaProfileAPI.get(1).then((value) => {
            setProfile(value.response);
            setColor(value.response.color);
        });
    }, []);

    const onChange = (
        newValue: OnChangeValue<{ label: string; value: string; __isNew__?: boolean }, true>,
        actionMeta: ActionMeta<{ label: string; value: string; __isNew__?: boolean }>
    ) => {
        if (actionMeta.action === 'create-option') {
            for (const i in newValue) {
                const v = newValue[i];
                if ((v as any).__isNew__) {
                    delete newValue[i].__isNew__;
                    CommonDataAPI.add({ value: newValue[i].label, mpfId: 21 });
                }
            }
        }
    };

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

    if (!prof) return <div>Loading...</div>;

    return (
        <ThemeProvider theme={newTheme}>
            <ProfilePageWrapper>
                <NavBar />
                <MetaProfileHeader
                    title={prof.title}
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
                    <MFCEmpty onAddClick={() => setModalAddFieldVisible(true)} />
                    {prof.composition.map((category) => {
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
