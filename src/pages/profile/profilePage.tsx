import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { ProfilePageMainContainer, ProfilePageWrapper } from './styles';
import { MFCBox, MFCEmpty, MfcHeader } from '../../components/metaFieldContainer';
import { ProfileBanner } from '../../components/profileBanner';
import { metaprofilemock } from '../../tests/metaprofile.test';
import { ThemeProvider, useTheme } from 'styled-components';
import tinycolor2 from 'tinycolor2';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components/Footer';
import { MCAddMetaField } from '../../components/modals';
import { SliderPicker } from 'react-color';
import { SearchBox } from '../../components';
import { useApiCommonSearch } from '../../hooks/useApiCommonSearch';
import { CommonDataAPI } from '../../api';
import { ActionMeta, OnChangeValue } from 'react-select';
import { ApiCommondata } from '../../api/api.commondata';
import { NavBar } from '../../components/NavBar';

export const ProfilePage: FC = () => {
    const { t, i18n } = useTranslation();
    const profile = useMemo(() => (metaprofilemock as any)[i18n.language], [i18n.language]);
    const [color, setColor] = useState(profile.settings.color);

    const [isEdit, setIsEdit] = useState(false);
    const [modalAddFieldVisible, setModalAddFieldVisible] = useState(false);

    const [sv, ssv] = useState<{ label: string; value: string }[]>([]);
    const commonSearch = useApiCommonSearch();
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
    }, [theme, color]);

    const onEditButtonClick = useCallback(() => {
        setIsEdit(!isEdit);
    }, [isEdit]);

    return (
        <ThemeProvider theme={newTheme}>
            <ProfilePageWrapper>
                <NavBar />
                <ProfileBanner
                    isEditable={true}
                    isQrcode={true}
                    isSharable={true}
                    name={profile.title}
                    onEditClick={onEditButtonClick}
                />
                <ProfilePageMainContainer>
                    {isEdit && (
                        <MFCBox title={t('profile_color_chose')}>
                            <SliderPicker
                                color={color}
                                onChange={(v) => {
                                    setColor(v.hex);
                                }}
                            />
                        </MFCBox>
                    )}
                    <MfcHeader type={profile.type} categories={profile.categories} />
                    <MFCEmpty onAddClick={() => setModalAddFieldVisible(true)} />
                    <MFCBox title={'Тестирование хелпера'}>
                        <SearchBox
                            value={sv as any}
                            isTags
                            isCreatable
                            onSearch={commonSearch(21) as any}
                            // onCreate={addSearch}
                            onChange={onChange as any}
                        />
                    </MFCBox>
                </ProfilePageMainContainer>
            </ProfilePageWrapper>
            <Footer />
            {modalAddFieldVisible && (
                <MCAddMetaField onClose={() => setModalAddFieldVisible(false)} />
            )}
        </ThemeProvider>
    );
};
