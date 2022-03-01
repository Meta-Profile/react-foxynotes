import { MFCategory, MFType } from './types';

export const metaprofilemock = {
    title: 'Екатерина Крамер',
    type: {
        mftId: 1,
        title: 'Локальный мета профиль',
        icon: 'meta',
    } as MFType,
    categories: [
        {
            mfcId: 1,
            title: 'Основное',
            icon: 'meta',
        },
        {
            mfcId: 2,
            title: 'Параметры тела',
            icon: 'meta',
        },
        {
            mfcId: 3,
            title: 'Одежда',
            icon: 'meta',
        },
        {
            mfcId: 4,
            title: 'Здоровье',
            icon: 'meta',
        },
        {
            mfcId: 5,
            title: 'Интересы',
            icon: 'meta',
        },
        {
            mfcId: 6,
            title: 'Семья',
            icon: 'meta',
        },
        {
            mfcId: 7,
            title: 'Вкусы',
            icon: 'meta',
        },
        {
            mfcId: 8,
            title: 'Социальные сети',
            icon: 'meta',
        },
        {
            mfcId: 9,
            title: 'Адрес',
            icon: 'meta',
        },
    ] as MFCategory[],
    fields: [],
    settings: {
        color: '#FE6023',
    },
};
