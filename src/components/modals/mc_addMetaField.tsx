import { FC, useCallback, useState } from 'react';
import { ModalContainer } from './modalContainer';
import { useTranslation } from 'react-i18next';
import { Box, SearchBox } from '../ui';
import { MetaProfileAPI } from '../../app/api';
import i18next from 'i18next';
import debounce from 'lodash.debounce';
import { MetaProfileCategory } from '../../app/api/classes/metaprofile/types';
import { useApiMetaProfileCategoriesSearch } from '../../hooks/useApiMetaProfileCategories';
import { useApiMetaProfileFieldsSearch } from '../../hooks/useApiMetaProfileFields';

export const MCAddMetaField: FC = () => {
    const { t } = useTranslation();
    const [category, setCategory] = useState<MetaProfileCategory>();

    const searchCategories = useApiMetaProfileCategoriesSearch();
    const searchFields = useApiMetaProfileFieldsSearch();

    console.log(category);

    return (
        <ModalContainer title={t('modal_title_add_meta_field')}>
            <Box width={'100%'}>
                <SearchBox
                    keyIndex={'title'}
                    valueIndex={'mpсId'}
                    onSearch={searchCategories as any}
                    value={category}
                    onChange={(value) => setCategory(value)}
                />
            </Box>
            {category && (
                <Box width={'100%'}>
                    <SearchBox
                        keyIndex={'title'}
                        valueIndex={'mpfId'}
                        onSearch={searchFields(category.mpcId) as any}
                    />
                </Box>
            )}
        </ModalContainer>
    );
};
