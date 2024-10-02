import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, useAnimation } from 'framer-motion';
import AnimatedBox from '../function/main';
import SnowEffect from '../function/snow';
import getTotalHeight from '../function/getTotalHeight';
import i18n from '../component/translateText';
import { useTranslation } from 'react-i18next';

export default function Main() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [hasFadeOut, setHasFadeOut] = useState(false);
    const [arrowFadeOut, setArrowFadeOut] = useState(false);
    const [isEnglish, setIsEnglish] = useState(false);
    const title = useAnimation(); 
    const arrow = useAnimation();
    const text = isEnglish ? "Welcome to my Portfolio    " : "Bienvenue sur mon Portfolio";
    const { t } = useTranslation(); 

    const letterAnimation = {
        hidden: { opacity: 0, y: -50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.5,
            }
        }),
    };


    window.onload = () => {
        getTotalHeight();
    };
    
    const skillSection = document.getElementById('skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.skill-panel').forEach((panel, index) => {
                    setTimeout(() => {
                        panel.style.transform = "translateY(0px)";
                    }, index * 200);
                });
            }
        });
    }, {
        threshold: 0.1
    });
    
    if (skillSection) {
        console.log("skillsSection trouvé");
        observer.observe(skillSection);
        
    } else {
        console.error("L'élément #skills n'a pas été trouvé !");
    }
    
    const handleScroll = (event) => {
        if (event.deltaY) {

            setScrollPosition((prev) => prev + event.deltaY * 0.3);
        }
    };
    useEffect(() => {
        // if(!hasFadeOut){
            if (scrollPosition < 200) {
                title.start({
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 }
                });
            } else {
                title.start({
                    // opacity: 0,
                    y: -550, 
                    transition: { duration: 0.6 }
                });
                setHasFadeOut(true);
            }
        // }
    }, [scrollPosition, title,hasFadeOut]);

    useEffect(() =>{
        if(!arrowFadeOut){
            if(scrollPosition < 100){
                arrow.start({
                    y: [0, -20, 0],
                    transition:{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                    }
                })
            }
            else{
                arrow.start({
                    opacity: 0,
                    y: -110, 
                    transition: { duration: 0.6 }
                });
                setArrowFadeOut(true);
            }
        }
    }, [scrollPosition,arrow,arrowFadeOut]);


    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        return () => window.removeEventListener('wheel', handleScroll);
    }, []);

    const toggleLanguage  = () =>{
        const newLang = isEnglish ? 'fr' : 'en';
        i18n.changeLanguage(newLang);
        setIsEnglish(!isEnglish);
        localStorage.setItem('language', newLang);
    }

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
          i18n.changeLanguage(savedLanguage);
          setIsEnglish(savedLanguage === 'en');
        }
      }, [i18n]);

    return (
        <div className="w-screen h-screen relative bg-gray-950 overflow-hidden">
            <Canvas className="fixed top-0 left-0 w-full h-full" id="canva">
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 10, 5]} intensity={1} />
                <AnimatedBox />
                <SnowEffect />
            </Canvas>
            <label className="inline-flex items-center z-10 cursor-pointer absolute top-6 right-6 lg:top-12 lg:right-20">
            <input 
                type="checkbox" 
                className="sr-only" 
                checked={isEnglish} 
                onChange={toggleLanguage} 
            />
            <div className="w-[90px] h-10 flex items-center iceBlue rounded-full p-1 relative">
                {/* Drapeaux en fond */}
                <div className="absolute inset-0 flex justify-between items-center px-2">
                <img 
                    src="assets/france.png" 
                    alt="Johann Bois Portfolio" 
                    className="w-6 h-6 z-20" 
                />
                <img 
                    src="assets/uk.png" 
                    alt="Johann Bois Portfolio" 
                    className="w-7 h-6 z-20" 
                />
                </div>
                {/* Bulle qui se déplace */}
                <div className={`bg-white w-9 h-9 rounded-full shadow-md transform 
                ${isEnglish ? 'translate-x-12' : 'translate-x-0'} 
                transition-transform duration-300 ease-in-out`} />
            </div>
            </label>
            <motion.div
                initial={{ opacity: 0 }}
                animate={title }
                className="absolute top-0 left-0 w-full h-screen flex items-center justify-center"
            >
                    <h1 className="text-4xl lg:text-6xl font-bold snowWhite text-center sm:text-left TitleFont">
                    {text.split("").map((letter, index) => (
                <motion.span
                    key={index}
                    custom={index}
                    variants={letterAnimation}
                    initial="hidden"
                    animate="visible"
                    className="inline-block" //
                >
                    
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
                    </h1>
            </motion.div>
            <motion.div
            animate = {arrow}
            className='absolute text-white bottom-8 left-1/2 z-20'
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" fill='white'/></svg>
            </motion.div>
            <div className='space-y-60 flex flex-col' id="test">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3 }}
                    className='flex justify-start'
                >
                    <div className='bg-gradient-to-b from-blue-500 to-blue-300 p-8 bg-opacity-50 rounded-r-lg text-center w-1/2 sm:w-[40%] backdrop-blur-md' style={{ transform: `translateY(${scrollPosition * -1}px)`, position: 'relative' }}>
                        <img src="assets/Johann.jpg" alt="Your name" class="w-32 rounded-full shadow-lg"/>
                        <div class="text-left">
                            <h1 class="text-4xl lg:text-5xl font-bold snowWhite MainFontBold">
                                BOIS Johann
                            </h1>
                            <p class="lg:text-xl snowWhite mt-4 MainFont">
                                {t('description1')}
                            </p>
                            <p class="lg:text-xl snowWhite mt-4 MainFont">                                
                                {t('description2')}
                            </p>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3 }}
                    className='flex justify-end'
                >
                    <div className='bg-white/50 rounded-l-lg text-center w-1/2 sm:w-1/3 backdrop-blur-md' style={{ transform: `translateY(${scrollPosition * -1}px)`, position: 'relative' }}>
                        <h2 className="text-3xl snowWhite z-10 MainFontBold pt-4">My Project</h2>
                        <p className="snowWhite MainFont">Ce texte apparaît également en scrollant.</p>
                    </div>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3 }}
                    className='flex justify-start'
                >
                    <div className='bg-white/50 rounded-r-lg text-center w-1/2 sm:w-1/3 backdrop-blur-md' style={{ transform: `translateY(${scrollPosition * -1}px)`, position: 'relative' }}>
                        <h2 className="text-3xl snowWhite MainFontBold pt-4">My Project</h2>
                        <p className="snowWhite MainFont">Ce texte apparaît également en scrollant.</p>
                    </div>
                </motion.div>
            </div>

            <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3 }}
                    className='flex justify-end'
            >
                <div id='skills' className='sm:w-1/3 flex items-center mt-6 MainFontBold' style={{ transform: `translateY(${scrollPosition * -1}px)`, position: 'relative' }}>
                    <div id="skill-panel-1" className="skill-panel transition-transform duration-1000 ease-in-out transform relative w-1/2">
                        <img src="assets/woodMultipleSign.png" alt='portfolio Johann Bois' className=''/>
                        <p className='snowWhite text-xm sm:text-xl absolute top-[10%] left-[25%] md:top-[13%] md:left-1/3 '>JavaScript</p>
                        <p className='snowWhite text-xm sm:text-xl absolute top-[30%]  left-1/3 md:top-[33%] md:left-[40%] '>React</p>
                        <p className='snowWhite text-xm sm:text-xl absolute top-1/2 left-1/3 md:top-[53%] md:left-[36%] '>Node.js</p>

                    </div>
                    <div id="skill-panel-2" className="skill-panel transition-transform duration-1000 ease-in-out transform relative w-1/4">
                        <img src="assets/arrow.png" alt='portfolio Johann Bois' className='w-5/6'/>
                        <p className='snowWhite text-xs sm:text-lg absolute top-[12px] left-[21px] md:top-[19%] md:left-1/4 -rotate-6'>C++</p>
                    </div>
                    <div id="skill-panel-3" className="skill-panel pt-20 transition-transform duration-1000 ease-in-out transform relative w-1/4">
                    <img src="assets/arrowReverse.png" alt='portfolio Johann Bois'/>
                    <p className='snowWhite text-xm sm:text-xl absolute top-[57%] left-[29px] md:top-1/2 md:left-[40%] rotate-6 '>C#</p>
                    </div>
                </div>
            </motion.div>

        </div>
    );
}
