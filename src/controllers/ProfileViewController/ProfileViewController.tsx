import { ViewControllerProps } from '../CoreViewController';
import React, { FC, useEffect, useState } from 'react';
import { DefaultViewController } from '../DefaultViewController';
import { useNavigator } from '../../hooks/useNavigator';
import { useMetaProfile } from '../../hooks/useMetaProfile';
import { defaultTheme } from '../../theme/defaultTheme';
import { useProfileColors } from '../../hooks/useProfileColors';
import { ThemeProvider } from 'styled-components';
import { DefaultNavBarController } from '../DefaultNavBarController';
import { MFCBox, MFCEmpty } from '../../components/metaFieldContainer';
import { ProfileContainer } from './mobile/ProfileContainer';
import { SliderPicker } from 'react-color';
import { useTranslation } from 'react-i18next';
import { useDebouncedCallback } from 'use-debounce';
import { MetaProfileAPI } from '../../api';
import { ProfileHeader } from './mobile/ProfileHeader';
import { Button, FlexBox } from '../../components';
import { StandaloneHelper } from '../../helpers/standalone';
import { isMobile } from '../../states';
import { DefaultNavBar } from '../../components/DefaultNavBar';

export const ProfileViewController: FC<ViewControllerProps> = (props) => {
    const { args } = props;
    const [color, setColor] = useState<string>();
    const { updateNavigatorView } = useNavigator();
    const { t } = useTranslation();
    const [profile] = useMetaProfile(args.mpId);
    const [isEdit, setIsEdit] = useState(false);

    const newTheme = useProfileColors(color);

    const update = useDebouncedCallback(() => {
        MetaProfileAPI.update(args.mpId, { color });
    }, 1000);

    useEffect(() => {
        StandaloneHelper.setBodyColor(defaultTheme.colors.black95);
        document.documentElement.style.background = defaultTheme.colors.black95;
    }, []);

    useEffect(() => {
        if (profile) {
            setColor(profile.color);
        }
    }, [profile]);

    if (!newTheme || !profile) return <div>Loading...</div>;

    // ===========================================================================
    // MOBILE || STANDALONE
    // ===========================================================================
    if (isMobile)
        return (
            <ThemeProvider theme={newTheme}>
                <DefaultNavBar
                    backgroundColor={newTheme.banner}
                    back={true}
                    title={profile.title}
                />
                <ProfileHeader avatar={args.img}>
                    {!isEdit ? (
                        <>
                            <Button
                                onClick={() => setIsEdit(true)}
                                icon={'edit'}
                                type={'secondary'}>
                                Редактировать
                            </Button>
                        </>
                    ) : (
                        <FlexBox gap={8}>
                            <Button
                                onClick={() => setIsEdit(false)}
                                icon={'check'}
                                type={'secondary'}>
                                Сохранить
                            </Button>
                        </FlexBox>
                    )}
                </ProfileHeader>
                <ProfileContainer>
                    {isEdit && (
                        <div style={{ userSelect: 'none' }}>
                            <MFCBox isMobile={isMobile} title={t('profile_color_chose')}>
                                <SliderPicker
                                    color={color}
                                    onChange={(v) => {
                                        setColor(v.hex);
                                        update();
                                    }}
                                />
                            </MFCBox>
                        </div>
                    )}
                    {profile.composition.length < 1 && <MFCEmpty onAddClick={() => null} />}
                    {profile.composition.map((category) => {
                        if (category.category.mpcId === 1) {
                            return category.fields.map((field) => (
                                <MFCBox
                                    isMobile={isMobile}
                                    isEditMode={false}
                                    key={field.mpdId}
                                    title={field.field.title}>
                                    {JSON.stringify(field.data)}
                                </MFCBox>
                            ));
                        }
                    })}
                </ProfileContainer>
            </ThemeProvider>
        );

    // ===========================================================================
    // DESKTOP
    // ===========================================================================
    return <DefaultViewController>Go to mobile</DefaultViewController>;
};
