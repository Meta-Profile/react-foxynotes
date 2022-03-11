import { ViewControllerProps } from '../CoreViewController';
import { DefaultViewController } from '../DefaultViewController';
import { FC, useCallback, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { defaultTheme } from '../../theme/defaultTheme';
import { StandaloneHelper } from '../../helpers/standalone';
import { useNavigator } from '../../hooks/useNavigator';
import { Button, Divider, Text } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../../selectors';
import { logout } from '../../slices/auth';
import { FlexBoxCenter } from '../../components/FlexBox';

export const UserViewController: FC<ViewControllerProps> = (props) => {
    const { children, ...appState } = props;
    const { updateNavigatorView } = useNavigator();

    // ===========================================================================
    // Selectors
    // ===========================================================================
    const { user } = useSelector(getAuth);

    // ===========================================================================
    // Dispatch
    // ===========================================================================
    const dispatch = useDispatch();
    const _logout = useCallback(() => dispatch(logout()), [dispatch]);

    // ===========================================================================
    // Theming
    // ===========================================================================

    const theme = useTheme() as typeof defaultTheme;
    useEffect(() => {
        StandaloneHelper.setBodyColor(theme.colors.black95);
        StandaloneHelper.setColor(theme.colors.blackAbsolute);
        updateNavigatorView({
            title: 'User',
            backgroundColor: theme.colors.blackAbsolute,
        });
    }, []);

    return (
        <DefaultViewController title={'Settings'} {...appState}>
            <FlexBoxCenter column gap>
                <Text type={'title'} color={'white'}></Text>
                <Button onClick={() => _logout()}>logout</Button>
            </FlexBoxCenter>
        </DefaultViewController>
    );
};
