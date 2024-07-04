import { skills } from "./Skills"; // Assuming skills is an array of skill objects with {name, icon}
import { motion } from "framer-motion";

const Skill = () => {
  const skillVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 150,
        damping: 20,
      },
    },
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
    
  return (

    <div   id="skill"  className="text-center" >
        <h2 className="text-3xl font-bold mb-6">🛠️ My  Skills</h2>
   
    <motion.div
         
    
      className="grid py-10  container mx-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
  

      {skills.map((skill, index) => {
        const IconComponent = skill.icon;
        return (
          <motion.div
            key={index}
            className="relative w-full h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 bg-yellow-200 rounded-lg shadow-md flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
            variants={skillVariants}
          >
            <IconComponent className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs md:text-sm text-center px-3 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {skill.name}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
    </div>
  );
};

export default Skill;
