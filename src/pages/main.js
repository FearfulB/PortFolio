import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import AnimatedBox from '../function/main';
import SnowEffect from '../function/snow';
import TestTextBlur from '../component/test';

export default function Main() {
    // const [scrollPosition, setScrollPosition] = useState(0);

    // const handleScroll = (event) => {
    //     if (event.deltaY) {
    //         setScrollPosition((prev) => prev + event.deltaY * 0.1);
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('wheel', handleScroll);
    //     return () => window.removeEventListener('wheel', handleScroll);
    // }, []);

    return (
        // <div className="w-screen h-screen relative bg-gray-950 overflow-hidden">
        //     <Canvas className="fixed top-0 left-0 w-full h-full">
        //         <ambientLight intensity={0.5} />
        //         <directionalLight position={[0, 10, 5]} intensity={1} />
        //         <AnimatedBox />
        //         <SnowEffect />
        //     </Canvas>

        //     <motion.div
        //         initial={{ opacity: 0 }}
        //         animate={{ opacity: 1 }}
        //         exit={{ opacity: 0 }}
        //         transition={{ duration: 1 }}
        //     >
        //         <div className="h-full w-full z-10 top-20 absolute">
        //             <h1 className="text-center text-6xl text-gray-800 MainFontBold font-bold">FABREGOULE Julien</h1>
        //         </div>
        //     </motion.div>

        //     <motion.div
        //         initial={{ opacity: 0 }}
        //         animate={{ opacity: 1 }}
        //         exit={{ opacity: 0 }}
        //         transition={{ duration: 3 }}
        //     >
        //         <div
        //             className='filter bg-white/30 rounded-r-lg text-center sm:w-1/3'
        //             style={{ transform: `translateY(${scrollPosition * -1}px)`, position: 'relative' }}
        //         >
        //             <h1 className="text-3xl text-black z-10 MainFontBold">Texte qui apparaît au défilement !</h1>
        //             <p className="text-black z-10 MainFontBold">Ce texte apparaît également en scrollant.</p>
        //         </div>
        //     </motion.div>
        // </div>
        <TestTextBlur/>
    );
}
