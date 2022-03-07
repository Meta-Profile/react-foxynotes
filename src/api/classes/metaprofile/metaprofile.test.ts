import { MetaProfileCategory, MFType } from './types';

export const metaprofilemockRu = {
    title: 'Екатерина Крамер',
    type: {
        mftId: 1,
        title: 'Локальный мета профиль',
        icon: 'meta',
    } as MFType,
    categories: [
        {
            mpcId: 1,
            title: 'Основное',
            icon: 'meta',
        },
        {
            mpcId: 2,
            title: 'Параметры тела',
            icon: 'meta',
        },
        {
            mpcId: 3,
            title: 'Одежда',
            icon: 'meta',
        },
        {
            mpcId: 4,
            title: 'Здоровье',
            icon: 'meta',
        },
        {
            mpcId: 5,
            title: 'Интересы',
            icon: 'meta',
        },
        {
            mpcId: 6,
            title: 'Семья',
            icon: 'meta',
        },
        {
            mpcId: 7,
            title: 'Вкусы',
            icon: 'meta',
        },
        {
            mpcId: 8,
            title: 'Социальные сети',
            icon: 'meta',
        },
        {
            mpcId: 9,
            title: 'Адрес',
            icon: 'meta',
        },
    ] as MetaProfileCategory[],
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
            mpcId: 1,
            title: 'General',
            icon: 'meta',
        },
        {
            mpcId: 2,
            title: 'Body measurements',
            icon: 'meta',
        },
        {
            mpcId: 3,
            title: 'Clothes',
            icon: 'meta',
        },
        {
            mpcId: 4,
            title: 'Health',
            icon: 'meta',
        },
        {
            mpcId: 5,
            title: 'Interests',
            icon: 'meta',
        },
        {
            mpcId: 6,
            title: 'Family',
            icon: 'meta',
        },
        {
            mpcId: 7,
            title: 'Tastes',
            icon: 'meta',
        },
        {
            mpcId: 8,
            title: 'Social networks',
            icon: 'meta',
        },
        {
            mpcId: 9,
            title: 'Address',
            icon: 'meta',
        },
    ] as MetaProfileCategory[],
    fields: [],
    settings: {
        color: '#FE6023',
    },
};

export const metaprofilemock = {
    ru: metaprofilemockRu,
    en: metaprofilemockEn,
};
