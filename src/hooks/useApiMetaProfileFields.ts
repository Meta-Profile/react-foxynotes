import { MetaProfileAPI } from '../app/api';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from 'react';
import { MetaProfileCategory } from '../app/api/classes/metaprofile/types';

export const useApiMetaProfileFields = (mpcId: number) => {
    const { i18n } = useTranslation();
    const [data, setData] = useState<MetaProfileCategory[]>([]);
    useEffect(() => {
        MetaProfileAPI.fields(mpcId, undefined, i18n.language).then((v) => setData(v.response));
    }, [i18n, mpcId]);
    return data;
};

export const useApiMetaProfileFieldsSearch = () => {
    const { i18n } = useTranslation();
    const [timer, setTimer] = useState<any>();
    const search = useCallback(
        (mpcId?: number) => (str: string, cb: any) => {
            setTimer((prev: any) => {
                if (prev) {
                    clearTimeout(prev);
                }
                return setTimeout(async () => {
                    const res = await MetaProfileAPI.fields(mpcId ?? -1, str, i18n.language);
                    cb(res.response);
                }, 500);
            });
        },
        [i18n]
    );

    return search;
};
