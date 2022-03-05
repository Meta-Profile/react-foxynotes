import { FC } from 'react';
import { Text } from '../../ui';
import { MFCEmptyButtonWrapper, MFCEmptyWrapper } from './styles';
import { Button } from '../../ui';
import { useTranslation } from 'react-i18next';

export interface MFCEmptyProps {
    onAddClick?: () => void;
}
export const MFCEmpty: FC<MFCEmptyProps> = (props) => {
    const { onAddClick } = props;
    const { t } = useTranslation();
    return (
        <MFCEmptyWrapper>
            <Text type={'section'} color={'black100'} opacity={0.7}>
                {t('mpc_empty_title')}
            </Text>
            <Text type="small">{t('mpc_empty_text')}</Text>
            <MFCEmptyButtonWrapper>
                <Button icon="add" type="primary" onClick={onAddClick}>
                    {t('mpc_empty_button_add')}
                </Button>
            </MFCEmptyButtonWrapper>
        </MFCEmptyWrapper>
    );
};
