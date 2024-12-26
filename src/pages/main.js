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
                                textDescription = {t('project1Description')} 
                                logo1 = {"steam"} 
                                logo2 = {"chrome"} 
                                logoNumber={2}
                                link1 = {"https://store.steampowered.com/app/3194900/Tona__Fallen_Zenith/"}
                                link2 = {"https://tonafallenzenith.fr"}
                            />
                        </div>
                        <div className='w-full'>
                            <Project 
                                textDescription  = {t('project1Description')} 
                                logo1 = {"github"}
                                link1 = {"https://github.com"}
                                logoNumber={1}
                            />
                        </div>
                    </div>
                    
                    <SkillPanels/>

                </div>
            </div>
        </div>

        
    );
};
