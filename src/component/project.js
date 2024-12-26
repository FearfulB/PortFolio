import { motion } from "framer-motion";

export default function Project(props) {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className=' sm:w-1/3'
        >
            <div className='projectBackground rounded-2xl backdrop-blur-md '>
                <div className="flex w-full justify-center p-2">
                    <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full overflow-hidden ">
                        <img src="assets/image/tona.png" alt="tona fallen zenith" className="w-10 h-10" />
                    </div>
                    <h2 className="sm:text-3xl text-lg snowWhite z-10 MainFontBold text-center flex items-center ml-4">
                        Tona : Fallen Zenith
                    </h2>
                </div>
                <hr class="border-t border-white" />
                <div id="tab" className="flex w-full MainFont text-white" >
                    <div className="firstTab rounded-b-lg flex justify-center items-center p-4">
                        <p className="text-center">Unity 3D</p>
                    </div>
                    <div className="secondTab rounded-b-lg flex justify-center items-center p-4">
                        <p className="text-center">Game developpment</p>
                    </div>
                    <div className="thirdTab rounded-b-lg flex justify-center items-center p-4">
                        <p className="text-center">C#</p>
                    </div>
                </div>
                <div className="p-3 text-white MainFont">
                    <p>
                        {props.textDescription}
                    </p>
                    <p>
                        <span className="font-bold">Mon rôle :</span> Développement des différentes mécaniques de la zone temple, gestion des collisions et création de divers système comme le système d’interraction
                    
                    </p>
                    <p>
                        <span className="font-bold">Résultat :</span> Presque 100 wishlists sur steam
                    </p>
                </div>

                <div className="w-full flex justify-end space-x-4 p-4">
                    {
                        Array.from({ length: props.logoNumber }).map((_, index) => {
                            const logoKey = `logo${index + 1}`;
                            const linkKey = `link${index + 1}`;
                            return(

                                <a key={index} href={props[linkKey]} target="_blank" rel="noopener noreferrer">
                                <img src={`assets/image/${props[logoKey]}.png`} alt={`${props[logoKey]}} image`} className="w-10 h-10"/>
                            </a>
                            );

                        })
                    }
                </div>
            </div>


    </motion.div>

    );
}   