import { FC, useCallback, useEffect } from 'react';
import { ModalContainerWrapper, ModalWrapper } from './styles';
import { Text } from '../../ui';

export interface ModalContainerProps {
    title?: string;
}

export const ModalContainer: FC<ModalContainerProps> = (props) => {
    const { children, title } = props;

    const lockScroll = useCallback(() => {
        document.body.style.overflow = 'hidden';
    }, []);

    const unlockScroll = useCallback(() => {
        document.body.style.overflow = '';
    }, []);

    useEffect(() => {
        lockScroll();
        return () => unlockScroll();
    }, []);

    return (
        <ModalWrapper>
            <ModalContainerWrapper>
                {title && <Text type={'normal'}>{title}</Text>}
                {children}
            </ModalContainerWrapper>
        </ModalWrapper>
    );
};
