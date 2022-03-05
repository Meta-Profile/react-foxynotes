import { FC, useCallback } from 'react';
import { SearchBoxWrapper } from './styles';
import Select from 'react-select/async';
import SelectCreate from 'react-select/async-creatable';
import { IndicatorsContainerProps } from 'react-select';
import { Icon } from '../Icon';
import { useTranslation } from 'react-i18next';

// const IndicatorSeparator = ({ innerProps }: IndicatorSeparatorProps<ColourOption, true>) => {
//     return null;
// };

const IndicatorsContainer = (props: IndicatorsContainerProps<any, true>) => {
    return (
        <div className={'rc__control-search'}>
            <Icon type={'search'} />
        </div>
    );
};

export interface SearchBoxProps<T, IsTags> {
    isTags?: true | undefined;
    isCreatable?: true | undefined;
    onSearch?: (input: string, cb?: any) => Promise<T[]>;
    placeholder?: string;
    value?: IsTags extends true ? T[] : T;
    onChange?: (value: IsTags extends true ? T[] : T) => void;
    onCreate?: (value: string) => void;
    defaultOptions?: T[];
    keyIndex?: string;
    valueIndex?: string;
}

export function SearchBox<T, IsTags>(props: SearchBoxProps<T, IsTags>) {
    const { t } = useTranslation();
    const {
        isTags,
        isCreatable,
        onSearch,
        value,
        onChange,
        placeholder,
        onCreate,
        defaultOptions,
        keyIndex,
        valueIndex,
    } = props;

    const noOptionsMessage = ({ inputValue }: { inputValue: string }) => (
        <span>
            {t('input_search_not_found')}
            <b>&quot;{inputValue}&quot;</b>
        </span>
    );

    const loadingMessage = ({ inputValue }: { inputValue: string }) => (
        <span>
            {t('input_search_loading')}
            <b>&quot;{inputValue}&quot;</b> ...
        </span>
    );

    const getOptionLabel = useCallback(
        (value: any) => (keyIndex ? value[keyIndex] : value['label']),
        [keyIndex]
    );

    const getOptionValue = useCallback(
        (value: any) => (valueIndex ? value[valueIndex] : value['label']),
        [valueIndex]
    );

    if (isCreatable)
        return (
            <SearchBoxWrapper>
                <SelectCreate
                    isMulti={isTags}
                    components={{
                        IndicatorSeparator: null,
                        IndicatorsContainer,
                    }}
                    getOptionLabel={getOptionLabel}
                    getOptionValue={getOptionValue}
                    classNamePrefix={'rc'}
                    placeholder={placeholder}
                    noOptionsMessage={noOptionsMessage}
                    loadingMessage={loadingMessage}
                    loadOptions={onSearch}
                    onChange={onChange as any}
                    onCreateOption={onCreate}
                    defaultValue={value}
                    defaultOptions={defaultOptions as any}
                />
            </SearchBoxWrapper>
        );

    return (
        <SearchBoxWrapper>
            <Select
                isMulti={isTags}
                components={{
                    IndicatorSeparator: null,
                    IndicatorsContainer,
                }}
                getOptionLabel={getOptionLabel}
                getOptionValue={getOptionValue}
                classNamePrefix={'rc'}
                placeholder={placeholder}
                noOptionsMessage={noOptionsMessage}
                loadingMessage={loadingMessage}
                loadOptions={onSearch}
                onChange={onChange as any}
                defaultValue={value}
                defaultOptions={defaultOptions as any}
            />
        </SearchBoxWrapper>
    );
}
