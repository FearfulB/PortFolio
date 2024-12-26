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
          className="skill-panel transition-transform duration-1000 ease-in-out transform relative w-1/2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <img src="assets/image/woodMultipleSign.png" alt="portfolio Johann Bois" />
          <p className="snowWhite text-xm sm:text-xl absolute top-[10%] left-[25%] md:top-[13%] md:left-1/3">
            JavaScript
          </p>
          <p className="snowWhite text-xm sm:text-xl absolute top-[30%] left-1/3 md:top-[33%] md:left-[40%]">
            React
          </p>
          <p className="snowWhite text-xm sm:text-xl absolute top-1/2 left-1/3 md:top-[53%] md:left-[36%]">
            Node.js
          </p>
        </motion.div>
        <motion.div
          id="skill-panel-2"
          className="skill-panel transition-transform duration-1000 ease-in-out transform relative w-1/4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <img src="assets/image/arrow.png" alt="portfolio Johann Bois" className="w-5/6" />
          <p className="snowWhite text-xs sm:text-lg absolute top-[12px] left-[21px] md:top-[19%] md:left-1/4 -rotate-6">
            C++
          </p>
        </motion.div>
        <motion.div
          id="skill-panel-3"
          className="skill-panel pt-20 transition-transform duration-1000 ease-in-out transform relative w-1/4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <img src="assets/image/arrowReverse.png" alt="portfolio Johann Bois" />
          <p className="snowWhite text-xm sm:text-xl absolute top-[57%] left-[29px] md:top-1/2 md:left-[40%] rotate-6">
            C#
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillPanels;