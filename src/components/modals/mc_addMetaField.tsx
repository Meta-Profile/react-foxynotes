import { FC, useCallback, useEffect, useState } from 'react';
import { ModalContainer } from './modalContainer';
import { useTranslation } from 'react-i18next';
import { Box, Button, FlexBox, SearchBox } from '../index';
import {
    useApiMetaProfileCategoriesFetch,
    useApiMetaProfileCategoriesSearch,
} from '../../hooks/useApiMetaProfileCategories';
import {
    useApiMetaProfileFieldsFetch,
    useApiMetaProfileFieldsSearch,
} from '../../hooks/useApiMetaProfileFields';
import { MetaProfileCategory, MetaProfileField } from '../../api';

export interface MCAddMetaFieldProps {
    onClose?: () => void;
    onAdd?: (category: MetaProfileCategory, field: MetaProfileField) => void;
}

export const MCAddMetaField: FC<MCAddMetaFieldProps> = (props) => {
    const { onClose, onAdd } = props;
    const { t, i18n } = useTranslation();
    const [category, setCategory] = useState<MetaProfileCategory>();
    const [field, setField] = useState<MetaProfileField>();

    const [categories, fetchCategories] = useApiMetaProfileCategoriesFetch(i18n.language);
    const [fields, fetchFields] = useApiMetaProfileFieldsFetch(i18n.language);

    const searchCategories = useApiMetaProfileCategoriesSearch(i18n.language);
    const searchFields = useApiMetaProfileFieldsSearch(i18n.language);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    useEffect(() => {
        if (category) fetchFields(category.mpcId);
    }, [category, fetchFields]);

    const onModalAddClick = useCallback(() => {
        if (category && field) {
            onAdd?.(category, field);
        }
    }, [category, field]);

    return (
        <ModalContainer onBackdropClick={onClose} title={t('modal_title_add_meta_field')}>
            <Box width={'100%'}>
                <SearchBox
                    keyIndex={'title'}
                    valueIndex={'mpcId'}
                    onSearch={searchCategories as any}
                    value={category}
                    onChange={(value) => setCategory(value)}
                    defaultOptions={categories}
                />
            </Box>
            {category && (
                <Box width={'100%'}>
                    <SearchBox
                        keyIndex={'title'}
                        valueIndex={'mpfId'}
                        onSearch={searchFields(category.mpcId) as any}
                        defaultOptions={fields}
                        value={field}
                        onChange={(value) => setField(value)}
                    />
                </Box>
            )}

            <FlexBox justify={'center'} gap width={'100%'}>
                {field && (
                    <Button
                        disabled={!field}
                        icon={'check'}
                        type={'primary'}
                        onClick={onModalAddClick}>
                        {t('modal_button_add')}
                    </Button>
                )}
                <Button icon={'x'} onClick={onClose} type={'secondary'}>
                    {t('modal_button_cancel')}
                </Button>
            </FlexBox>
        </ModalContainer>
    );
};
