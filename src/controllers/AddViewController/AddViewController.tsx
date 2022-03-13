import { ViewControllerProps } from '../CoreViewController';
import React, { FC, useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from 'styled-components';
import { defaultTheme } from '../../theme/defaultTheme';
import { Box, Button, FlexBox, Input, Text } from '../../components';
import { DefaultNavBar } from '../../components/DefaultNavBar';
import { useProfileColors } from '../../hooks/useProfileColors';
import { ProfileHeader } from '../ProfileViewController/mobile/ProfileHeader';
import {
    DefaultPanelContainer,
    DefaultPanelFooterContainer,
} from '../../components/DefaultPanel/styles';
import { DefaultContentContainer } from '../../components/containers/DefaultContentContainer';
import { SliderPicker } from 'react-color';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { useApp } from '../../hooks/useApp';
import { toast } from 'react-toastify';
import { FileAPI, MetaProfileAPI, UploaderAPI } from '../../api';
import { useNavigator } from '../../hooks/useNavigator';
import { NavigatorConfig } from '../../config/routes';
import { ImageCropperCircle } from '../../components/ImageCropperCircle';

export const AddViewController: FC<ViewControllerProps> = (props) => {
    const { children, ...appState } = props;

    // ===========================================================================
    // Theming
    // ===========================================================================
    const theme = useTheme() as typeof defaultTheme;
    const { present } = useNavigator();

    const [color, setColor] = useState(theme.colors.primary);
    const [title, setTitle] = useState('');
    const [showPhotoModal, setShowPhotoModal] = useState(false);
    const [image, setImage] = useState<string>();
    const [sourceImage, setSourceImage] = useState<string>();
    const [fileId, setFileId] = useState<number>();

    const { setLoading } = useApp();
    const newTheme = useProfileColors(color);

    useEffect(() => {
        // UploaderAPI.create().then((v) => console.log(v));
    }, []);

    const checkReady = async (id: number) => {
        const { response } = await UploaderAPI.status(id);
        if (response.completed === 'ERROR') {
            setLoading(false);
            toast.error('Ошибка загрузки файла!');
            return;
        }
        if (response.completed === 'COMPLETED') {
            setLoading(false);
            FileAPI.acceptById(response.file.id).then((v) => setImage(v));
            setFileId(response.file.id);
            return;
        }
        await new Promise((resolve) => setTimeout(() => resolve(null), 1000));
        await checkReady(id);
    };

    const onSaveImage = async (blob: Blob) => {
        try {
            setLoading(true);
            const sessionResponse = await UploaderAPI.create();
            await UploaderAPI.upload(sessionResponse.response.sessionId, blob);
            await checkReady(sessionResponse.response.sessionId);
        } catch (e: any) {
            toast.error(
                'Возникла непредвиденная ошибки при загрузке изображения. Попробуйте повторить попытку'
            );
            setLoading(false);
        }
    };

    const onCreateClick = async () => {
        if (title.length < 1) {
            toast.error('Введите название профиля');
            return;
        }
        setLoading(true);
        try {
            const { response } = await MetaProfileAPI.create({ title, color, fileId });
            setTimeout(() => {
                setLoading(false);
                present(NavigatorConfig.paths.profile, { mpId: response.mpId });
            }, 1000);
        } catch (e: any) {
            toast.error(e.error);
            setLoading(false);
        }
    };

    if (!newTheme) return <div>Loading</div>;

    return (
        <>
            <ThemeProvider theme={newTheme}>
                {showPhotoModal && (
                    <ImageCropperCircle
                        onSave={(data) => {
                            onSaveImage(data);
                            setShowPhotoModal(false);
                        }}
                        sourceImage={sourceImage}
                        onCancel={() => setShowPhotoModal(false)}
                    />
                )}
                <DefaultNavBar title={'Новый профиль'} backgroundColor={newTheme.banner} />
                <ProfileHeader
                    create
                    avatar={image}
                    onImageSelected={(file) => {
                        setSourceImage(URL.createObjectURL(file));
                        setShowPhotoModal(true);
                    }}
                />
                <DefaultContentContainer startOffset={-32}>
                    <DefaultPanelContainer>
                        <Text type={'small'}>{i18n.t('text.type_title_and_color')}</Text>
                        <Input
                            value={title}
                            onChange={(ev) => setTitle(ev.currentTarget.value)}
                            style={{ width: '100%' }}
                            placeholder={i18n.t('text.type_title_meta_profile')}
                        />
                        <Box width={'100%'}>
                            <SliderPicker
                                color={color}
                                onChange={(v) => {
                                    setColor(v.hex);
                                }}
                            />
                        </Box>
                        <DefaultPanelFooterContainer>
                            <Button
                                disabled={title.length < 1}
                                type={'primary'}
                                icon={'check'}
                                width={'100%'}
                                onClick={onCreateClick}>
                                {i18n.t('button.create')}
                            </Button>
                        </DefaultPanelFooterContainer>
                    </DefaultPanelContainer>
                </DefaultContentContainer>
            </ThemeProvider>
        </>
    );
};
