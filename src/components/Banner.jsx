import image from '../assets/avatar.svg';
// import { FaGithub, FaFacebook ,FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaFileDownload } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className='min-h-[85vh] lg:min-h-[78vh] flex items-center section' id='home'>
      <div className='container mx-auto md:grid grid-cols-3'>
        <div className='col-span-2'>
          {/* MY NAME */}
          <div>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-3xl lg:text-5xl font-bold font-tertiary uppercase'
            >
              Asdujjaman <span>Atik</span>
            </motion.h1>
          </div>

          <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-6 text-2xl lg:text-4xl font-secondary font-semibold'
          >
            <span className='mr-4 text-3xl text-white'>I am a</span>
            <TypeAnimation
              sequence={[
                'FrontEnd web-',
                500,
                'FrontEnd WEB-DEVELOPER!',
                2000,
              ]}
              wrapper="span"
              cursor={true}
              className='text-accent'
              repeat={Infinity}
            />
            <motion.p
              variants={fadeIn('up', 0.10)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-lg my-6'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit nisi, temporibus quis maiores eum quibusdam odit inventore, quidem necessitatibus facilis officiis cumque aspernatur culpa dicta numquam porro! Ut, earum.
            </motion.p>
          </motion.div>
          
          <div className='flex gap-4'>
          
            
            {/* Download Resume Button */}
            <a href="/placeholder_resume.txt" download="John_Doe_Resume.txt">
              <button className="btn text-xl font-bold text-black btn-sm"><FaFileDownload className='text-yellow-100' /> Resume</button>
            </a>

            <button className="btn text-xl font-bold text-yellow-200 btn-sm">Contact Me</button>
          </div>
        </div>
        
        {/* IMAGE */}
        <motion.div
          variants={fadeIn('down', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img src={image} alt="Profile" />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
