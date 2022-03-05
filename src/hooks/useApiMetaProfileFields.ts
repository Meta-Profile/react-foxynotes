import { MetaProfileAPI } from '../app/api';
import { useCallback, useState } from 'react';
import { MetaProfileField } from '../app/api/classes/metaprofile/types';

export const useApiMetaProfileFieldsFetch = (
    lang: string
): [MetaProfileField[], (mpcId: number) => void] => {
    const [data, setData] = useState<MetaProfileField[]>([]);
    const fetch = useCallback(
        (mpcId: number) => {
            MetaProfileAPI.fields(mpcId, undefined, lang).then((v) => setData(v.response));
        },
        [lang]
    );
    return [data, fetch];
};

export const useApiMetaProfileFieldsSearch = (lang: string) => {
    const [timer, setTimer] = useState<any>();
    const search = useCallback(
        (mpcId?: number) => (str: string, cb: any) => {
            setTimer((prev: any) => {
                if (prev) {
                    clearTimeout(prev);
                }
                return setTimeout(async () => {
                    const res = await MetaProfileAPI.fields(mpcId ?? -1, str, lang);
                    cb(res.response);
                }, 500);
            });
        },
        [lang]
    );

    return search;
};
