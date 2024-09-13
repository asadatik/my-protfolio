import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaFileDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';
import resume from '../assets/Resume_of_ATIK.pdf'
const Banner = () => {

//  const handleDownloadResume = () => {
//     const resumeUrl = '/public/Resume_of_ATIK.pdf';

//     const link = document.createElement('a');
//     link.href = resumeUrl;
//     link.target = '_blank'; // Open in a new tab
//     link.setAttribute('download', 'Resume_of_ATIK.pdf');
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };      


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
              As a passionate junior front-end developer, I craft dynamic and responsive websites using the latest technologies. With strong skills in HTML, CSS, and JavaScript, I create seamless user experiences that blend functionality and design.
            </motion.p>
          </motion.div>

          <div className='flex gap-4'>
            {/* Download Resume Button */}
             <a
                href={resume} download='resume' 
                 >
              <button className="btn text-xl font-bold text-black btn-sm">
                <FaFileDownload className='text-yellow-100' /> Resume
              </button>
            </a>
           
                     

            <Link smooth={true} spy={true} to='contact'>
              <button className="btn text-xl font-bold text-yellow-200 btn-sm">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <motion.div
          className='md:w-96 rounded-full'
          variants={fadeIn('down', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img
            className="bg-about bg-contain   rounded-full    bg-no-repeat mix-blend-lighten"
            src="https://i.ibb.co/vYrPhpW/IMG-20240617-WA0015-1-1.jpg"
            alt="Profile"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
