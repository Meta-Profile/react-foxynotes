import { useEffect, useState } from 'react';
import { MetaProfile, MetaProfileAPI } from '../api';

export const useMetaProfile = (mpId: number, delta?: number) => {
    const [profile, setProfile] = useState<MetaProfile>();
    useEffect(() => {
        if (delta != -1) {
            MetaProfileAPI.get(mpId).then((v) => setProfile(v.response));
        }
    }, [delta, mpId]);
    return [profile];
};
