import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from '../../../../public/locales/en/translation.json'
import cz from '../../../../public/locales/cz/translation.json'
import gr from '../../../../public/locales/gr/translation.json'
const resources = {
    en: {
        main: en
    },
    cz: {
        main: cz
    },
    gr: {
        main: gr
    }
}
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        debug: __IS_DEV__,
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: true
        }
    })

export default i18n
