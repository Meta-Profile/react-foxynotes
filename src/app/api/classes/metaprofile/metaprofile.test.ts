import { MFCategory, MFType } from './types';

export const metaprofilemockRu = {
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

export const metaprofilemockEn = {
    title: 'Kate Kramer',
    type: {
        mftId: 1,
        title: 'Local meta profile',
        icon: 'meta',
    } as MFType,
    categories: [
        {
            mfcId: 1,
            title: 'General',
            icon: 'meta',
        },
        {
            mfcId: 2,
            title: 'Body measurements',
            icon: 'meta',
        },
        {
            mfcId: 3,
            title: 'Clothes',
            icon: 'meta',
        },
        {
            mfcId: 4,
            title: 'Health',
            icon: 'meta',
        },
        {
            mfcId: 5,
            title: 'Interests',
            icon: 'meta',
        },
        {
            mfcId: 6,
            title: 'Family',
            icon: 'meta',
        },
        {
            mfcId: 7,
            title: 'Tastes',
            icon: 'meta',
        },
        {
            mfcId: 8,
            title: 'Social networks',
            icon: 'meta',
        },
        {
            mfcId: 9,
            title: 'Address',
            icon: 'meta',
        },
    ] as MFCategory[],
    fields: [],
    settings: {
        color: '#FE6023',
    },
};

export const metaprofilemock = {
    ru: metaprofilemockRu,
    en: metaprofilemockEn,
};
