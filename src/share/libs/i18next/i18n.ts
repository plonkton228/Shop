import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from '../../../../public/locales/en/translation.json'
import cz from '../../../../public/locales/cz/translation.json'
import gr from '../../../../public/locales/gr/translation.json'
import EnModal from '../../../../public/locales/en/modal.json'
import CzModal from '../../../../public/locales/cz/modal.json'
import GrModal from '../../../../public/locales/gr/modal.json'
import CZProfile from '../../../../public/locales/cz/profile.json'
import EnProfile from '../../../../public/locales/en/profile.json'
import GrProfile from '../../../../public/locales/gr/profile.json'
const resources = {
    en: {
        main: en,
        modal: EnModal,
        profile: EnProfile
    },
    cz: {
        main: cz,
        modal: CzModal,
        profile: CZProfile
    },
    gr: {
        main: gr,
        modal: GrModal,
        profile: GrProfile
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
