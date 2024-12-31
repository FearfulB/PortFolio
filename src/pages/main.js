import { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';
import i18n from '../component/translateText';
import { useTranslation } from 'react-i18next';
import ThreeCanvas from '../function/main';
import Title from '../component/Title';
import { motion } from 'framer-motion';
import Presentation from '../component/Presentation';
import ChangeLanguage from '../component/ChangeLanguage';
import SkillPanels from '../component/SkillPanels.js';
import Project from '../component/project.js';

export default function Main() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [arrowFadeOut, setArrowFadeOut] = useState(false);
    const [IsEnglish, setIsEnglish] = useState(false);

    const arrow = useAnimation();

    const { t } = useTranslation(); 
    // useEffect(() => {
    //     window.addEventListener('wheel', handleScroll);
    //     return () => window.removeEventListener('wheel', handleScroll);
    // }, []);

    const projet1 = {
        title : "Tona : Fallen Zenith",
        textSize : "text-3xl",
        img : "tona",
        numberSkills : 3,
        skills : ["Unity 3D", "Game Developpment", "C#"],
        colorSkills : ["firstTab","secondTab", "thirdTab"],
        text : t("project1Description"),
        logoNumber : 2,
        logo1 : "steam",
        logo2 : "chrome",
        link1 : "https://store.steampowered.com/app/3194900/Tona__Fallen_Zenith/",
        link2 : "https://tonafallenzenith.fr",
        myJob : t("job"),
        jobDescription : t("jobDescription1"),
        result : t("result"),
        resultDescription : t("resultDescription1"),
        imgDesc : "tonaImg"
    }
    const projet2 = {   
        title : "Make It Blue",
        textSize : "text-xl",
        img : "monaco",
        numberSkills : 3,
        skills : ["JavaScript", "Tailwind", "React"],
        colorSkills : ["firstTab","secondTab", "thirdTab"],
        text : t("project2Description"),
        logoNumber : 1,
        logo1 : "github",
        link1 : "https://github.com/UVictoras/Projet-Commun-Oceano-Monaco",
        myJob : t("job"),
        jobDescription : t("jobDescription2"),
        result : t("result"),
        resultDescription : t("resultDescription2"),
        imgDesc : "makeItBlue"
    }
    const projet3 = {   
        title : "Moteur de rendu 3D avec DirectX12",
        textSize : "text-2xl",
        img : "shape",
        numberSkills : 1,
        skills : ["C++"],
        colorSkills : ["firstTab"],
        text : t("project3Description"),
        logoNumber : 1,
        logo1 : "github",
        link1 : "https://github.com/Rayouyoux/DirectXAvengersEngine",
        myJob : t("job"),
        jobDescription : t("jobDescription3"),
        result : t("result"),
        resultDescription : t("resultDescription3"),
        imgDesc : "engine"
    }

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
          i18n.changeLanguage(savedLanguage);
          setIsEnglish(savedLanguage === 'en');
        }
    }, [i18n]);

    return (

        <div className="relative bg-gray-950 z-index-[-2]">
            <ThreeCanvas />
            <div className="relative z-10">
                <ChangeLanguage setIsEnglish={setIsEnglish} isEnglish = {IsEnglish}/>
                <Title isEnglish = {IsEnglish}/>
 
                <div className='space-y-10'>
                    <Presentation text = {t} />

                    <div className='w-full space-y-10'>
                        <div className='w-full flex justify-end '>
                            <Project 
                                projectDescription = {projet1}
                            />
                        </div>
                        <div className='w-full'>
                            <Project 
                                projectDescription = {projet2}
                            />
                        </div>
                        <div className='w-full flex justify-end '>
                            <Project 
                                projectDescription = {projet3}
                            />
                        </div>
                    </div>
                    
                    <SkillPanels/>

                </div>
            </div>
        </div>

        
    );
};
