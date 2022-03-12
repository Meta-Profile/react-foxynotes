import { ViewControllerProps } from '../CoreViewController';
import { DefaultViewController } from '../DefaultViewController';
import React, { FC, useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from 'styled-components';
import { defaultTheme } from '../../theme/defaultTheme';
import { useNavigator } from '../../hooks/useNavigator';
import { Box, Button, FlexBox, Input, Text } from '../../components';
import { NavigatorConfig } from '../../config/routes';
import { FlexBoxCenter, FlexBoxColumn } from '../../components/FlexBox';
import { StandaloneHelper } from '../../helpers/standalone';
import { NavBar } from '../../components/NavBar';
import { DefaultNavBar } from '../../components/DefaultNavBar';
import { useProfileColors } from '../../hooks/useProfileColors';
import { ProfileHeader } from '../ProfileViewController/mobile/ProfileHeader';
import { ProfileContainer } from '../ProfileViewController/mobile/ProfileContainer';
import {
    DefaultPanelContainer,
    DefaultPanelFooterContainer,
} from '../../components/DefaultPanel/styles';
import { DefaultContentContainer } from '../../components/containers/DefaultContentContainer';
import { SliderPicker } from 'react-color';
import { ProfileContainerLine } from '../ProfileViewController/mobile/styles';

export const AddViewController: FC<ViewControllerProps> = (props) => {
    const { children, ...appState } = props;
    const { updateNavigatorView } = useNavigator();

    // ===========================================================================
    // Theming
    // ===========================================================================

    const theme = useTheme() as typeof defaultTheme;
    const [color, setColor] = useState(theme.colors.primary);
    const newTheme = useProfileColors(color);

    if (!newTheme) return <div>Loading</div>;

    return (
        <>
            <ThemeProvider theme={newTheme}>
                <DefaultNavBar title={'Новый профиль'} backgroundColor={newTheme.banner} />
                <ProfileHeader create />
                <DefaultContentContainer startOffset={-16}>
                    <DefaultPanelContainer>
                        <Text type={'small'}>Введите название и выберите цвет</Text>
                        <Input
                            style={{ width: '100%' }}
                            placeholder={'Введите название мета-профиля'}
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
                            <Button type={'primary'} icon={'check'} width={'100%'}>
                                Создать
                            </Button>
                        </DefaultPanelFooterContainer>
                    </DefaultPanelContainer>
                </DefaultContentContainer>
            </ThemeProvider>
        </>
    );
};
