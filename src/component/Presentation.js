import { motion } from 'framer-motion';
export default function Presentation(props){

    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className='flex justify-start'
        >
            <div className='bg-gradient-to-b from-blue-500 to-blue-300 p-8 bg-opacity-50 rounded-r-lg text-center w-2/3 sm:w-[40%] backdrop-blur-md space-y-4'>
                <div className='w-full flex justify-center'>
                    <img src="assets/image/Johann.jpg" alt="Bois Johann Portfolio" class="w-36 rounded-2xl shadow-lg"/>
                </div>
                <div class="text-center">
                    <h1 class="text-4xl lg:text-5xl font-bold snowWhite MainFontBold">
                        BOIS Johann
                    </h1>
                    <p class="lg:text-xl snowWhite mt-4 MainFont">
                        {props.text('description1')}
                    </p>
                    <p class="lg:text-xl snowWhite mt-4 MainFont">                                
                        {props.text('description2')}
                    </p>
                </div>
                <div>
                    <a href='assets/image/cv.pdf' download>
                        <button type="button" class="text-white buttonBackground hover:bg-blue-800 MainFont rounded-full text-xs sm:text-sm px-5 py-2.5 text-center me-2 mb-2">{props.text('download')}</button>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}