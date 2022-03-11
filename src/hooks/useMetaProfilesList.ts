import { useEffect, useState } from 'react';
import { MetaProfile, MetaProfileAPI } from '../api';

export const useMetaProfilesList = (delta?: number) => {
    const [list, setList] = useState<MetaProfile[]>([]);
    useEffect(() => {
        if (delta != -1) {
            MetaProfileAPI.list().then((v) => setList(v.response));
        }
    }, [delta]);
    return [list];
};
