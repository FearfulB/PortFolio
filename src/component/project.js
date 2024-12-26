import { motion } from "framer-motion";

export default function Project() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className='flex justify-end w-1/2 sm:w-1/3'
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
                        Durant l’été 2024, avec mes amis, nous avons eu l’envie de laisser notre première empreinte dans le secteur du jeu vidéo.
                        Nous avons monté une équipe de 15 personnes pour réaliser ce projet ambitieux. C’est ainsi qu’est né Tona : Fallen Zenith, un jeu d’aventure en monde semi-ouvert mêlant exploration et stratégie.
                    </p>
                    <p>
                        <span className="font-bold">Mon rôle :</span> Développement des différentes mécaniques de la zone temple, gestion des collisions et création de divers système comme le système d’interraction
                    
                    </p>
                    <p>
                        <span className="font-bold">Résultat :</span> Presque 100 wishlists sur steam
                    </p>
                </div>

                <div className="w-full flex justify-end space-x-4 p-4">
                    <a href="https://store.steampowered.com/app/3194900/Tona__Fallen_Zenith/" target="blank">
                        <img src="assets/image/steam.png" alt="" className="w-10 h-10"/>
                    </a>
                    <a href="https://tonafallenzenith.fr" target="blank">
                        <img src="assets/image/chrome.png" alt="" className="w-10 h-10"/>
                    </a>
                </div>
            </div>


    </motion.div>

    );
}   