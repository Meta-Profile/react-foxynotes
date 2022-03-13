import { FC, useEffect } from 'react';
import { Animated, DefaultLoadingContainerWrapper } from './styles';
import { Icon } from '../Icon';
import { Text } from '../Text';

export const DefaultLoadingContainer: FC = () => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);
    return (
        <DefaultLoadingContainerWrapper>
            <Animated>
                <Icon type={'meta'} size={'m'} color={'primary'} />
            </Animated>
            <Text type={'small'} color={'white'}>
                Пожалуйста, подождите
            </Text>
        </DefaultLoadingContainerWrapper>
    );
};
