import { motion } from 'framer-motion'
import { fadeIn } from '../constants'

import features from '../images/features.png'

const Features = () => {
  return (
    <div id="features" className="pt-[12.75rem] -mt-[6.25rem] md:-mt-[2.25rem]">
      <div className="max-w-full mx-auto relative px-5 lg:px-14">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="lg:w-1/4 animate-fade-right animate-once animate-duration-[2ms]">
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <h3 className="text-[25px] lg:text-[40px] text-primary-color font-bold md:w-full lg:w-full xl:w-[65%] mb-3">
                Why we are better than others
              </h3>
              <p className="lg:w-full">
                A simple paragraph is comprised of three major components. The
                first sentence, which is often a declarative sentence, is called
                the “topic sentence.”
              </p>
            </motion.div>
          </div>
          {/* Card */}
          <div className="w-full lg:w-3/4">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-16 gap-8">
              <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-10 md:p-16 lg:p-24 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer ">
                <div>
                  <img src={features} alt="features" />
                  <h5 className="text-2xl font-bold text-primary-color px-5 text-start mt-5">
                    Conventient study schedule
                  </h5>
                </div>
              </div>
              <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-10 md:p-16 lg:p-24 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
                <div>
                  <img src={features} alt="features" />
                  <h5 className="text-2xl font-bold text-primary-color px-5 text-start mt-5">
                    Conventient study schedule
                  </h5>
                </div>
              </div>
              <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-10 md:p-16 lg:p-24 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer ">
                <div>
                  <img src={features} alt="features" />
                  <h5 className="text-2xl font-bold text-primary-color px-5 text-start mt-5">
                    Conventient study schedule
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
