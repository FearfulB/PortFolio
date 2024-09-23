import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { OrbitControls } from '@react-three/drei';
import AnimatedBox from '../function/main';
import ScrollReveal from '../function/scrollReveal';

export default function Main() {
    useEffect(() => {
        const textElement = document.getElementById('scrollingText');
        
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            textElement.style.transform = `translateY(${scrollPosition}px)`;
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="w-screen h-screen relative">
            <Canvas className="fixed top-0 left-0 w-full h-full" id="scrollingText">
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 10, 5]} intensity={1} />
                <AnimatedBox />
                <OrbitControls />
            </Canvas>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
            </motion.div>
            <div className="h-full w-full z-10 top-20 absolute " >
                <h1 className="text-center text-6xl text-gray-800 MainFontBold font-bold  text-animated">BOIS Johann</h1>
            </div>

            <div >
                <ScrollReveal>
                    <div className='backdrop-blur-md opacity-80 bg-red-700 w-1/2 rounded-r-lg text-center sm:w-1/3 animated'>
                        <h1 className="text-3xl text-black z-10 MainFontBold">Texte qui apparaît au défilement !</h1>
                        <p className="text-black z-10 MainFontBold">Ce texte apparaît également en scrollant.</p>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
