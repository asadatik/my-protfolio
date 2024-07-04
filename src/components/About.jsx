
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Education from './Education';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div className="section mt-6 " id="about" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-8 border-b-4 w-fit border-teal-300 pb-2">
          About Me
        </h1>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Text Content */}
          <motion.div
            variants={fadeIn('right',0.3)} initial='hidden'
            whileInView={'show'}
            viewport={{once:false ,amount: 0.7}}
          
          
          className="lg:w-2/3 text-white">
            <h4 className="text-lg md:text-xl font-medium mb-6">
             <span className=  'text-emerald-300 text-2xl font-tertiary ' > Hey there!</span> I`m a passionate front-end web developer with a love for creating stunning and responsive websites. My expertise includes working with technologies such as{" "}
              <span className="font-bold">HTML, CSS, TailwindCSS, JavaScript, ReactJS,  ExpressJS, and MongoDB.</span>
            </h4>
            <motion.h4
              variants={fadeIn('up',0.6)} initial='hidden'
              whileInView={'show'}
              viewport={{once:false ,amount: 0.7}}
            
            className="text-lg md:text-xl font-medium mb-6">
              I`m a quick learner who enjoys exploring new technologies and continuously improving my skills to stay ahead in the industry. My goal is to take on new challenges and collaborate with dynamic teams.
            </motion.h4>
          </motion.div>

    
            {/* Statistics and CountUps */}
            <div className="lg:w-1/3 flex flex-col items-start lg:items-end">
            <motion.div
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg w-full mb-6"
            >
              <h3 className="text-xl font-bold mb-2 text-white">Experience</h3>
              {inView ? <CountUp start={-10} end={1} duration={3} className="text-3xl font-bold text-white" /> : null}
              <span className="text-lg ml-2 text-white">year in web development</span>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="bg-gradient-to-r from-teal-600 via-green-600 to-blue-500 p-6 rounded-lg shadow-lg w-full mb-6"
            >
              <h3 className="text-xl font-bold mb-2 text-white">Projects</h3>
              {inView ? <CountUp start={0} end={15} duration={3} className="text-3xl font-bold text-white" /> : null}
              <span className="text-lg ml-2 text-white">completed projects</span>
            </motion.div>
          </div>
        </div>
     {/* education */}
     <Education></Education>
      </div>
    </div>
  );
};

export default About;

