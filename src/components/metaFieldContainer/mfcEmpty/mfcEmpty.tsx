import { FC } from 'react';
import { Text } from '../../ui/Text';
import { MFCEmptyButtonWrapper, MFCEmptyWrapper } from './styles';
import { Button } from '../../ui/Button';

export const MFCEmpty: FC = () => {
    return (
        <MFCEmptyWrapper>
            <Text type={'section'} color={'black100'} opacity={0.7}>
                Пустой мета профиль
            </Text>
            <Text type="small">Мета профиль пока еще пустой, добавьте первое мета поле.</Text>
            <MFCEmptyButtonWrapper>
                <Button icon="add" type="primary">
                    Добавить мета поле
                </Button>
            </MFCEmptyButtonWrapper>
        </MFCEmptyWrapper>
    );
};
