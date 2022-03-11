import { ViewControllerProps } from '../CoreViewController';
import { DefaultViewController } from '../DefaultViewController';
import React, { FC, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { defaultTheme } from '../../theme/defaultTheme';
import { useNavigator } from '../../hooks/useNavigator';
import { Button, Text } from '../../components';
import { NavigatorConfig } from '../../config/routes';
import { FlexBoxCenter, FlexBoxColumn } from '../../components/FlexBox';
import { StandaloneHelper } from '../../helpers/standalone';

export const AddViewController: FC<ViewControllerProps> = (props) => {
    const { children, ...appState } = props;
    const { updateNavigatorView } = useNavigator();

    // ===========================================================================
    // Theming
    // ===========================================================================

    const theme = useTheme() as typeof defaultTheme;
    useEffect(() => {
        StandaloneHelper.setBodyColor(theme.colors.black95);
        StandaloneHelper.setColor(theme.colors.blackAbsolute);
        updateNavigatorView({
            title: 'Create meta profile',
            backgroundColor: theme.colors.blackAbsolute,
        });
    }, []);

    return (
        <>
            <DefaultViewController {...appState}>
                <FlexBoxColumn gap>1</FlexBoxColumn>
            </DefaultViewController>
        </>
    );
};
