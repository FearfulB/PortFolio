import { motion } from "framer-motion";

export default function Project(props) {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className=' w-1/2 sm:w-1/3'
        >
            <div className='projectBackground rounded-2xl backdrop-blur-md w-full '>
                <div className="flex w-full justify-center p-2">
                    <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full overflow-hidden ">
                        <img src={`assets/image/${props.projectDescription.img}.png`} alt={`${props.projectDescription.img}`} className="w-10 h-10" />
                    </div>
                    <h2 className={`sm:${props.projectDescription.textSize} text-lg snowWhite z-10 MainFontBold text-center flex items-center ml-4`}>
                        {props.projectDescription.title}
                    </h2>
                </div>
                <hr class="border-t border-white" />
                <div id="tab" className="flex w-full MainFont text-white" >
                    {
                        Array.from({ length: props.projectDescription.numberSkills }).map((_, index) => {
                            return(
                                <div 
                                    key = {index}
                                    className={`${props.projectDescription.colorSkills[index]} rounded-b-lg flex justify-center items-center sm:p-4 p-1`} >
                                    <p className="text-center sm:text-base text-xs">{props.projectDescription.skills[index]}</p>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="p-3 text-white MainFont">
                    <p>
                        {props.projectDescription.text}
                    </p>
                    <br/>
                    <p>
                        <span className="font-bold">{props.projectDescription.myJob}</span> 
                        {props.projectDescription.jobDescription}
                    </p>
                    <br/>
                    <p>
                        <span className="font-bold">{props.projectDescription.result}</span> 
                        {props.projectDescription.resultDescription}
                    </p>
                </div>
                <div className="p-2">
                    <img src={`assets/image/${props.projectDescription.imgDesc}.jpg`} alt = {`${props.projectDescription.imgDesc} image`} className="rounded-2xl"/>
                </div>
                <div className="w-full flex justify-end space-x-4 p-4">
                    {
                        Array.from({ length: props.projectDescription.logoNumber }).map((_, index) => {
                            const logoKey = `logo${index + 1}`;
                            const linkKey = `link${index + 1}`;
                            return(
                                <a key={index} href={props.projectDescription[linkKey]} target="_blank" rel="noopener noreferrer">
                                <img src={`assets/image/${props.projectDescription[logoKey]}.png`} alt={`${props.projectDescription[logoKey]}} image`} className="w-10 h-10"/>
                            </a>
                            );

                        })
                    }
                </div>
            </div>


    </motion.div>

    );
}   