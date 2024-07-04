import { motion } from 'framer-motion';

const fadeIn = (direction = 'up', delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : -50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
      className="p-6 rounded-xl  border-purple-300 border-2 shadow-2xl flex flex-col items-center text-center md:text-left md:flex-row md:items-start md:justify-between md:gap-1 mb-6 overflow-hidden"
    >
      <div className="md:w-1/2  relative overflow-hidden "> {/* Centering the image */}
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-auto rounded-lg transform transition-transform duration-300 hover:scale-105 "
        />

        {/* link */}
             <div className="flex mt-4 justify-center gap-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-blue-500 hover:underline"
            >
              Live Project
            </a>
          )}
          {project.githubClientLink && (
            <a
              href={project.githubClientLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-blue-500 hover:underline"
            >
              GitHub Client
            </a>
          )}
          {project.githubServerLink && (
            <a
              href={project.githubServerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-blue-500 hover:underline"
            >
              GitHub Server
            </a>
          )}
        </div>
        {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-900 opacity-0 hover:opacity-75 transition-opacity duration-300"></div> */}
      </div>
      <div className="md:w-2/3 md:pl-6">
        <h2 className="text-2xl text-amber-400 font-bold mb-4">{project.name}</h2>
        <p className="text-lg mb-4">{project.description}</p>
        <h3 className="text-xl font-semibold mb-2">Core Features:</h3>
        <ul className="list-disc list-inside mb-4">
          {project.features.map((feature, index) => (
            <li key={index} className="text-lg">{feature}</li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mb-2">Used Technologies:</h3>
        <p className="text-lg">{project.technologies.join(', ')}</p>
       
      </div>
    </motion.div>
  );
};

export default ProjectCard;
