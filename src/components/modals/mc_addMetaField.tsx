import { FC } from 'react';
import { ModalContainer } from './modalContainer';
import { useTranslation } from 'react-i18next';
import { Box, FlexBox, SearchBox } from '../ui';

export const MCAddMetaField: FC = () => {
    const { t } = useTranslation();
    return (
        <ModalContainer title={t('modal_title_add_meta_field')}>
            <Box width={'100%'}>
                <SearchBox />
            </Box>
            <Box width={'100%'}>
                <SearchBox isTags />
            </Box>
            <Box width={'100%'}>
                <SearchBox isCreatable />
            </Box>
            <Box width={'100%'}>
                <SearchBox isTags isCreatable />
            </Box>
        </ModalContainer>
    );
};
