import { ViewControllerProps } from './CoreViewController';
import styled from 'styled-components';
import { FC, useEffect } from 'react';

export const DefaultViewControllerWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${(p) => p.theme.colors.black95};
    padding-top: 64px;
`;

export const DefaultViewControllerMobileWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${(p) => p.theme.colors.black95};
    padding-bottom: 50px;
    //-webkit-overflow-scrolling: touch;
    @media (display-mode: fullscreen) {
        background-color: rebeccapurple;
    }
`;

export const DefaultViewControllerStandaloneWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${(p) => p.theme.colors.black95};
    padding-bottom: 85px;
`;

export const DefaultViewController: FC<ViewControllerProps> = (props) => {
    const { children, isMobile, isStandalone } = props;
    useEffect(() => {
        document.body.style.background = '#000000';
    }, []);

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
    return <DefaultViewControllerWrapper>{children}</DefaultViewControllerWrapper>;
};
