import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './lng/en.json';
import ru from './lng/ru.json';

const defaultLang = { lng: 'en' };
const localLang = localStorage.getItem('lng') || JSON.stringify(defaultLang);
const { lng } = JSON.parse(localLang);

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
  },
  lng,
});

export default { i18next };
