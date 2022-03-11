import { ViewControllerProps } from './CoreViewController';
import styled from 'styled-components';
import { FC } from 'react';
import { isMobile, isStandalone } from '../states';
import { useNavigator } from '../hooks/useNavigator';

export const DefaultViewControllerWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 16px;
    //background-color: ${(p) => p.theme.colors.black95};
    padding-top: 64px;
`;

export const DefaultViewControllerMobileWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 16px;
    //background-color: ${(p) => p.theme.colors.black95};
    padding-bottom: 50px;
    padding-top: 50px;
`;

export const DefaultViewControllerStandaloneWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    gap: 16px;
    flex-direction: column;
    //background-color: ${(p) => p.theme.colors.black95};
    padding-bottom: 85px;
    padding-top: 50px;
`;

export const DefaultViewController: FC<ViewControllerProps> = (props) => {
    const { children } = props;

    //
    // PWA
    //
    if (isStandalone)
        return (
            <DefaultViewControllerStandaloneWrapper>
                {children}
            </DefaultViewControllerStandaloneWrapper>
        );

    //
    // Mobile
    //
    if (isMobile)
        return <DefaultViewControllerMobileWrapper>{children}</DefaultViewControllerMobileWrapper>;

    ///
    // Desktop
    //
    return <DefaultViewControllerWrapper>{children}</DefaultViewControllerWrapper>;
};
