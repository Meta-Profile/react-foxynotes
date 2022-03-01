import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ru from './translate/ru.json';
import en from './translate/en.json';
import { getActiveLang } from './common/language';

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'ru';
        resources: {
            ru: typeof ru;
            en: typeof ru;
        };
    }
    interface Resources {
        ru: typeof ru;
        en: typeof ru;
    }
}

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru },
        },
        lng: getActiveLang(),
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
