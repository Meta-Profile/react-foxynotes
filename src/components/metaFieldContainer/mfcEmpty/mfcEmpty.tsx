import { FC } from 'react';
import { Text } from '../../ui/Text';
import { MFCEmptyButtonWrapper, MFCEmptyWrapper } from './styles';
import { Button } from '../../ui/Button';
import { useTranslation } from 'react-i18next';

export const MFCEmpty: FC = () => {
    const { t } = useTranslation();
    return (
        <MFCEmptyWrapper>
            <Text type={'section'} color={'black100'} opacity={0.7}>
                {t('mpc_empty_title')}
            </Text>
            <Text type="small">{t('mpc_empty_text')}</Text>
            <MFCEmptyButtonWrapper>
                <Button icon="add" type="primary">
                    {t('mpc_empty_button_add')}
                </Button>
            </MFCEmptyButtonWrapper>
        </MFCEmptyWrapper>
    );
};
