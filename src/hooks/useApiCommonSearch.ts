import { CommonDataAPI, MetaProfileAPI } from '../api';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from 'react';
import { MetaProfileCategory } from '../api/classes/metaprofile/types';

export const useApiCommonSearch = () => {
    const [timer, setTimer] = useState<any>();
    const search = useCallback(
        (mpfId: number) => (str: string, cb: any) => {
            setTimer((prev: any) => {
                if (prev) {
                    clearTimeout(prev);
                }
                return setTimeout(async () => {
                    const res = await CommonDataAPI.search({
                        query: str,
                        mpfId,
                    });
                    cb(res.response.map((it) => ({ value: it.commonId, label: it.title })));
                }, 500);
            });
        },
        []
    );

    return search;
};
