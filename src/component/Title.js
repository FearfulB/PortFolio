import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function Title(props){
    const title = useAnimation(); 

    const text = props.isEnglish ? "Welcome to my Portfolio    " : "Bienvenue sur mon Portfolio";
    
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

    // useEffect(() => {
             
    //     title.start({
    //         opacity: 1,
    //         y: 0,
    //         transition: { duration: 0.6 }
    //     });
            
    // }, []);

    // useEffect(() =>{
    //     arrow.start({
    //         y: [0, -20, 0],
    //         transition:{
    //             duration: 1,
    //             repeat: Infinity,
    //             repeatType: "loop",
    //             ease: "easeInOut"
    //         }
    //     })
    // }, []);

        
    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{opacity:1,
                    y : 0,
                    transition: { duration: 0.6 }
            }}
            className="flex flex-col justify-between items-center w-full h-screen"
        >
            <div className='flex justify-center items-center flex-grow'>
                <h1 className="text-3xl lg:text-6xl font-bold snowWhite text-center sm:text-left TitleFont">
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
            </div>
            <div className='w-full flex justify-center mt-auto'>
                <motion.div
                    animate = {{
                        y: [0, -20, 0],
                        transition:{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                        }
                    }}
                    className='text-white z-20  mb-10' 
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" fill='white'/></svg>
                </motion.div>
            </div>
        </motion.div>
    )
}
