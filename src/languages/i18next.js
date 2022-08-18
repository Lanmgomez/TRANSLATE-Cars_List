import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en.json'
import pt from './pt.json'

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        pt: {
            translation: pt,
        }
    },
    lang: localStorage.getItem("lang") || "en",
});

export default i18next;