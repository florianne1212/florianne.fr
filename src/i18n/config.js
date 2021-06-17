import i18next from 'i18next';

i18next.init({
    fallbackLng: 'fr',
    resources: {
        fr: {
            translations: require('../locales/fr/translation.json')
        },
        en: {
            translations: require('../locales/en/translation.json')
        }
    },
    ns: ['translations'],
    defaultNS: 'translations',
    returnObjects: true,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
    react: {
        useSuspense : true,
    },
});

i18next.languages = ['fr', 'en'];

export default i18next;