
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Education = () => {
    return (
        <div>
             {/* Education Section */}
        <div className="mt-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 border-b-4 w-1/3 border-teal-300 pb-2">
            Education
          </h2>
          <div className="relative pl-6 md:pl-12">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-emerald-500"></div>
            <motion.div
              variants={fadeIn('right', 0.3)} initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="relative mb-8 p-6 rounded-lg shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #42A6E3 0%, #FF56F6 100%)',
              }}
            >
              <div className="absolute -left-4 top-4 w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              <h3 className="text-xl font-semibold text-white">2018 - 2019</h3>
              <p className="text-lg text-white">Secondary School Certificate (S.S.C) - <span className="font-bold">4.75 GPA</span></p>
              <p className="text-md text-white">Pirgachha J.N Govt. Model High School, Rangpur</p>
            </motion.div>
            <motion.div
              variants={fadeIn('left', 0.3)} initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="relative mb-8 p-6 rounded-lg shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #FF56F6 0%, #42A6E3 100%)',
              }}
            >
              <div className="absolute -left-4 top-4 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              <h3 className="text-xl font-semibold text-white">2019 - 2021</h3>
              <p className="text-lg text-white">Higher Secondary Certificate (H.S.C) - <span className="font-bold">4.83 GPA</span></p>
              <p className="text-md text-white">Collectorate School & College, Rangpur</p>
            </motion.div>
            <motion.div
              variants={fadeIn('right', 0.3)} initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="relative mb-8 p-6 rounded-lg shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #42A6E3 0%, #FF56F6 100%)',
              }}
            >
              <div className="absolute -left-4 top-4 w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              <h3 className="text-xl font-semibold text-white">Complete Web Development Course</h3>
              <p className="text-md text-white">Programming Hero (9th batch)</p>
            </motion.div>
          </div>
        </div>
        </div>
    );
};

export default Education;