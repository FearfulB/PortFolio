import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Les traductions pour chaque langue
const resources = {
  en: {
    translation: {
      welcome: "Welcome to my portfolio!",
      description1: "I am currently 20 years old and I am a 3rd year student in the field of video games. Passionate about creation and development, I am a very perfectionist and perseverant person. These qualities allowed me to successfully carry out several large-scale projects, where I was able to learn and evolve, both technically and creatively.",
      description2:"At the same time, I had the opportunity to do several small jobs, which gave me a variety of enriching experiences. Always looking for new knowledge and challenges, I look forward to sharing my journey and my projects with you."
    }
  },
  fr: {
    translation: {
      description1: "J'ai actuellement 20 ans et je suis un étudiant en 3ème année dans le domaine du jeu vidéo. Passionné de création et de développement, je suis une personne très perfectionniste et persévérante. Ces qualités m'ont permis de mener à bien plusieurs projets d'envergure, où j'ai pu apprendre et évoluer, tant sur le plan technique que créatif.",
      description2:"En parallèle, j'ai eu l'opportunité d'effectuer plusieurs petits travaux, ce qui m'a apporté des expériences variées et enrichissantes. Toujours à la recherche de nouvelles connaissances et de défis, j'ai hâte de partager avec vous mon parcours et mes projets. "
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
