import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillPanels = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref} // Référence pour détecter si l'élément est dans la vue
      initial={{ opacity: 0, y: -100 }} // Initialisation de l'animation
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }} // Animation déclenchée quand l'élément est visible
      transition={{ duration: 1, ease: "easeOut" }} // Transition fluide
      className="flex justify-end"
    >
      <div id="skills" className="sm:w-1/3 flex items-center mt-6 MainFontBold">
        <motion.div
          id="skill-panel-1"
          className="skill-panel relative w-1/2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <img src="assets/image/woodMultipleSign.png" alt="portfolio Johann Bois" />
          <p className="snowWhite text-xs sm:text-lg absolute top-[12%] left-[25%] md:top-[10%] md:left-[27%]">
            JavaScript
          </p>
          <p className="snowWhite text-xs sm:text-xl absolute top-[30%] left-1/3 md:top-[33%] md:left-[35%]">
            React
          </p>
          <p className="snowWhite text-xs sm:text-xl absolute top-[53%] left-1/3 md:top-[53%] md:left-[32%]">
            Node.js
          </p>
        </motion.div>
        
        <motion.div
          id="skill-panel-2"
          className="skill-panel relative w-1/4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <img src="assets/image/arrow.png" alt="portfolio Johann Bois" className=" " />
          <p className="snowWhite text-xs sm:text-lg absolute top-[15%] left-1/4 md:top-[16%] md:left-1/4 -rotate-6">
            Unity
          </p>
        </motion.div>
        <motion.div
          id="skill-panel-1"
          className="skill-panel relative w-1/2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <img src="assets/image/woodMultipleSign.png" alt="portfolio Johann Bois" />
          <p className="snowWhite text-xm sm:text-xl absolute top-[10%] left-[45%] md:top-[13%] md:left-[45%]">
            C
          </p>
          <p className="snowWhite text-xm sm:text-xl absolute top-[30%] left-[43%] md:top-[33%] md:left-[43%]">
            C++
          </p>
          <p className="snowWhite text-xm sm:text-xl absolute top-1/2 left-[43%] md:top-[53%] md:left-[43%]">
            C#
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillPanels;