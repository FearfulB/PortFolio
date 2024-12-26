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
            <div className='bg-gradient-to-b from-blue-500 to-blue-300 p-8 bg-opacity-50 rounded-r-lg text-center w-1/2 sm:w-[40%] backdrop-blur-md space-y-4'>
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
            </div>
        </motion.div>
    );
}