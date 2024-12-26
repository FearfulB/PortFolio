import i18n from '../component/translateText';

export default function ChangeLanguage(props){
  const toggleLanguage  = () =>{
        const newLang = props.isEnglish ? 'fr' : 'en';
        i18n.changeLanguage(newLang);
        props.setIsEnglish(!props.isEnglish);
        localStorage.setItem('language', newLang);
    }

    return (
        <label className="inline-flex items-center z-10 cursor-pointer absolute top-6 right-6 lg:top-12 lg:right-20">
            <input 
                type="checkbox" 
                className="sr-only" 
                checked={props.isEnglish} 
                onChange={toggleLanguage} 
            />
            <div className="w-[90px] h-10 flex items-center iceBlue rounded-full p-1 relative">
                {/* Drapeaux en fond */}
                <div className="absolute inset-0 flex justify-between items-center px-2">
                <img 
                    src="assets/image/france.png" 
                    alt="Johann Bois Portfolio" 
                    className="w-6 h-6 z-20" 
                />
                <img 
                    src="assets/image/uk.png" 
                    alt="Johann Bois Portfolio" 
                    className="w-7 h-6 z-20" 
                />
                </div>
                {/* Bulle qui se déplace */}
                <div className={`bg-white w-9 h-9 rounded-full shadow-md transform 
                ${props.isEnglish ? 'translate-x-12' : 'translate-x-0'} 
                transition-transform duration-300 ease-in-out`} />
            </div>
        </label>
    )
}