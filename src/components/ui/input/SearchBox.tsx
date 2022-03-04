import { FC } from 'react';
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
    console.log(props);
    return (
        <div className={'rc__control-search'}>
            <Icon type={'search'} />
        </div>
    );
};

export interface SearchBoxProps<T, IsTags> {
    isTags?: true | undefined;
    isCreatable?: true | undefined;
    onSearch?: (input: string) => Promise<T[]>;
    placeholder?: string;
    value?: IsTags extends true ? T[] : T;
    onChange?: (value: IsTags extends true ? T[] : T) => void;
    onCreate?: (value: string) => void;
}

export function SearchBox<T, IsTags>(props: SearchBoxProps<T, IsTags>) {
    const { t } = useTranslation();
    const { isTags, isCreatable, onSearch, value, onChange, placeholder, onCreate } = props;

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

    if (isCreatable)
        return (
            <SearchBoxWrapper>
                <SelectCreate
                    isMulti={isTags}
                    components={{
                        IndicatorSeparator: null,
                        IndicatorsContainer,
                    }}
                    classNamePrefix={'rc'}
                    placeholder={placeholder}
                    noOptionsMessage={noOptionsMessage}
                    loadingMessage={loadingMessage}
                    loadOptions={onSearch}
                    onChange={onChange as any}
                    onCreateOption={onCreate}
                    defaultValue={value}
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
                classNamePrefix={'rc'}
                placeholder={placeholder}
                noOptionsMessage={noOptionsMessage}
                loadingMessage={loadingMessage}
                loadOptions={onSearch}
                onChange={onChange as any}
                defaultValue={value}
            />
        </SearchBoxWrapper>
    );
}
