import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Les traductions pour chaque langue
const resources = {
  en: {
    translation: {
      welcome: "Welcome to my portfolio!",
      description1: "I am currently 20 years old and I am a 3rd year student in the field of video games. Passionate about creation and development, I am a very perfectionist and perseverant person. These qualities allowed me to successfully carry out several large-scale projects, where I was able to learn and evolve, both technically and creatively.",
      description2:"At the same time, I had the opportunity to do several small jobs, which gave me a variety of enriching experiences. Always looking for new knowledge and challenges, I look forward to sharing my journey and my projects with you.",
      project1Description: "During the summer of 2024, my friends and I wanted to make our first mark in the video game industry. We created a team of 15 people to carry out this ambitious project. And that's how Tona: Fallen Zenith was born, a semi-open world adventure game combining exploration and strategy.",
      project2Description : " Project carried out in a team of 18 people for the client Musée Océanographique de Monaco. We designed and developed an interactive application using Node.js for the backend and React for the frontend. This application aimed to raise awareness and educate the public on the protection of the oceans. We used a real-time 3D collaboration engine, 3DVerse, to offer an immersive and interactive experience, allowing users to interact with the planet in a dynamic and engaging way.",
      project3Description : " Design in a team of 4, in just 3 weeks, of a 3D rendering engine developed from-scratch based on DirectX12 documentation. The engine integrated the management of geometric shapes, the application of textures, and an interactive camera. We also implemented mechanics such as player movement, shooting, and dynamic camera control. A technical challenge requiring in-depth mastery of 3D rendering concepts.",
      job : "My job :",
      result : "Result :",
      jobDescription1 : " Development of the different mechanics of the temple zone, management of collisions and creation of various systems such as the interaction system",
      jobDescription2 : " Create all the frontend of the application",
      jobDescription3 : " Understand how to create 3D shapes and how to apply a texture to them",
      resultDescription1 : " 100 wishlists on steam and a demo announced february 2025",
      resultDescription2 : " ",
      resultDescription3 : " A working engine with an playable game",
    }
  },
  fr: {
    translation: {
      description1: "J'ai actuellement 20 ans et je suis un étudiant en 3ème année dans le domaine du jeu vidéo. Passionné de création et de développement, je suis une personne très perfectionniste et persévérante. Ces qualités m'ont permis de mener à bien plusieurs projets d'envergure, où j'ai pu apprendre et évoluer, tant sur le plan technique que créatif.",
      description2:"En parallèle, j'ai eu l'opportunité d'effectuer plusieurs petits travaux, ce qui m'a apporté des expériences variées et enrichissantes. Toujours à la recherche de nouvelles connaissances et de défis, j'ai hâte de partager avec vous mon parcours et mes projets. ",
      project1Description :"Durant l’été 2024, avec mes amis, nous avons eu l’envie de laisser notre première empreinte dans le secteur du jeu vidéo. Nous avons monté une équipe de 15 personnes pour réaliser ce projet ambitieux.C’est ainsi qu’est né Tona : Fallen Zenith, un jeu d’aventure en monde semi-ouvert mêlant exploration et stratégie.",
      project2Description : "Projet réalisé en équipe de 18 personnes pour le client Musée Océanographique de Monaco. Nous avons conçu et développé une application interactive utilisant Node.js pour le backend et React pour le frontend. Cette application visait à sensibiliser et éduquer le public sur la protection des océans. Nous avons utilisé un moteur de collaboration 3D en temps réel, 3DVerse, pour offrir une expérience immersive et interactive, permettant aux utilisateurs d'intéragir avec la planète de manière dynamique et engageante.",
      project3Description : "Conception en équipe de 4, en seulement 3 semaines, d'un moteur de rendu 3D développé from-scratch à partir de la documentation DirectX12. Le moteur intégrait la gestion de formes géométriques, l'application de textures, et une caméra interactive. Nous avons également implémenté des mécaniques telles que le déplacement du joueur, le tir, et le contrôle dynamique de la caméra. Un défi technique exigeant une maîtrise approfondie des concepts de rendu 3D.",
      job : "Mon rôle :",
      result : "Résultat :",
      jobDescription1 : " Développement des différentes mécaniques de la zone temple, gestion des collisions et création de divers système comme le système d’interraction",
      jobDescription2 : " Créer tous le frontend de l'application",
      jobDescription3 : " Comprendre comment créer des formes 3D et comment leur appliqué une texture",
      resultDescription1 : " 100 wishlists sur steam et une démo annoncé pour février 2025",
      resultDescription2 : " ",
      resultDescription3 : " Un moteur fonctionnel avec un jeu jouable",
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
