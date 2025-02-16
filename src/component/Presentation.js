import { motion } from 'framer-motion';
import Skill from './skill';
export default function Presentation(props){

    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className='justify-start w-2/3 sm:w-[40%]'
        >
            <div className='bg-gradient-to-b from-myBlue-300 to-myBlue-500 bg-opacity-50 rounded-r-lg backdrop-blur-md '>
                <div className='p-8 space-y-4'>
                    <div className='w-full flex justify-center'>
                        <img src="assets/image/Johann.jpg" alt="Bois Johann Portfolio" class="w-36 shadow-lg"/>
                    </div>
                    <div class="text-center">
                        <h1 class="text-4xl lg:text-5xl font-bold snowWhite MainFontBold">
                            BOIS Johann
                        </h1>
                        <p class="lg:text-xl snowWhite mt-4 MainFont MidleBrawnBackground p-2 rounded-lg">
                            {props.text('description1')}
                        </p>
                        <p class="lg:text-xl snowWhite mt-4 MainFont MidleBrawnBackground p-2 rounded-lg">                                
                            {props.text('description2')}
                        </p>
                    </div>
                </div>
                <div className='LightBrawnBackground inline-block px-4 py-1.5 rounded-r-xl'>
                    <h2 className='text-xl lg:text-2xl text-[#5E3408] font-bold MainFontBold'>{props.text('skill')}</h2>
                </div>
                <div className='SnowBackground w-[90%] rounded-r-xl'>
                    <div className='lg:flex lg:space-x-10 w-full justify-center space-y-2 md:space-y-0'>
                        <div className='space-y-2'>
                            <Skill text={"JavaScript"} color={"border-green-600"} link={props.link[1]}/>
                            <Skill text={"React"} color={"border-green-600"} link={props.link[1]}/>
                            <Skill text={"Tailwind"} color={"border-green-600"} link={props.link[1]}/>
                        </div>
                        <div className='space-y-2'>
                            <Skill text={"Unreal"} color={"border-yellow-300"}/>
                            <Skill text={"Unity"} color={"border-yellow-300"} link={props.link[0]}/>
                        </div>
                        <div className='space-y-2'>
                            <Skill text={"C"}/>
                            <Skill text={"C++"} link={props.link[2]}/>
                            <Skill text={"C#"} link={props.link[0]}/>    
                        </div>
                    </div>

                </div>
                <div className='text-center'>
                    <a href='assets/image/Johann-BOIS-CV.pdf' download>
                        <button type="button" class="text-white MidleBrawnBackground hover:[#5E3408] MainFont rounded-full text-xs sm:text-sm px-5 py-2.5 text-center me-2 mb-2">{props.text('download')}</button>
                    </a>
                </div>
            </div>
            
        </motion.div>
        
    );
}