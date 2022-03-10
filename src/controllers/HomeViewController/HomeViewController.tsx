import { ViewControllerProps } from '../CoreViewController';
import { DefaultViewController } from '../DefaultViewController';
import { FC, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { defaultTheme } from '../../theme/defaultTheme';
import { StandaloneHelper } from '../../helpers/standalone';
import { useNavigator } from '../../hooks/useNavigator';
import { Button, Text } from '../../components';
import { RoutesConfig } from '../../config/routes';
import { FlexBoxCenter } from '../../components/FlexBox';

export const HomeViewController: FC<ViewControllerProps> = (props) => {
    const { children, ...appState } = props;
    const { present } = useNavigator();

    // ===========================================================================
    // Theming
    // ===========================================================================

    const theme = useTheme() as typeof defaultTheme;
    useEffect(() => {
        StandaloneHelper.setColor(theme.colors.black95);
    }, [theme]);

    return (
        <DefaultViewController {...appState}>
            <FlexBoxCenter column gap>
                <Text type={'title'} color={'white'}>
                    Home Controller
                </Text>
                <Button onClick={() => present(RoutesConfig.paths.profile)}>test profile</Button>
            </FlexBoxCenter>
        </DefaultViewController>
    );
};
