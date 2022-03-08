import { MetaProfileAPI, MetaProfileCategory } from '../api';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from 'react';

export const useApiMetaProfileCategories = () => {
    const { i18n } = useTranslation();
    const [data, setData] = useState<MetaProfileCategory[]>([]);

    useEffect(() => {
        MetaProfileAPI.categories(undefined, i18n.language).then((v) => setData(v.response));
    }, [i18n]);
    return data;
};

export const useApiMetaProfileCategoriesFetch = (
    lang: string
): [MetaProfileCategory[], () => void] => {
    const [data, setData] = useState<MetaProfileCategory[]>([]);
    const fetch = useCallback(() => {
        MetaProfileAPI.categories(undefined, lang).then((v) => setData(v.response));
    }, [lang]);
    return [data, fetch];
};

export const useApiMetaProfileCategoriesSearch = (lang: string) => {
    const [timer, setTimer] = useState<any>();
    const search = useCallback(
        (str: string, cb: any) => {
            setTimer((prev: any) => {
                if (prev) {
                    clearTimeout(prev);
                }
                return setTimeout(async () => {
                    const res = await MetaProfileAPI.categories(str, lang);
                    cb(res.response);
                }, 500);
            });
        },
        [lang]
    );

    return search;
};
