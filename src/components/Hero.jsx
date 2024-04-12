import { motion } from 'framer-motion'
import { fadeIn } from '../constants'
const Hero = () => {
  return (
    <div id="overview" className="pt-[10rem] -mt-[3.25rem] md:-mt-[1.25rem]">
      <div className="container max-w-full mx-auto relative z-0 md:px-12 p-4">
        <div
         className="bg-gradient-to-r from-[#EE9AE5] to-[#5961F9] w-full md:p-9 py-8 px-4 rounded-3xl rounded-br-[8rem]">
          <motion.h2
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}

          className="md:text-6xl text-[29px] md:text-[60px] font-semibold md:leading-[5.5rem] text-white-color w-full md:w-[90%] lg:w-4/5 xl:w-1/2 md:mb-4 mb-4 flex gap-10">
            Develop your skills without diligence
          </motion.h2>
          <motion.div 
           variants={fadeIn('down', 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.7 }}
           
          className="text-[#EBEBEB] text-md md:text-2xl font-medium mb-4">
            <p className="text-[#EBEBEB]">
              A good example of a paragraph contains a topic sentence, details
              and a conclusion.
            </p>
            <p className="text-[#EBEBEB]">
              &apos;There are many different kinds of animals that live in
              China.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="space-x-3 lg:space-x-6 md:pb-8"
          >
            <button className="border-secondary-color bg-secondary-color rounded-sm py-3 px-6 lg:px-10 font-semibold text-xs md:text-lg lg:text-xl text-white-color hover:text-black transition-all duration-300">
              Get Started
            </button>
            <button className="border-secondary-color bg-secondary-color rounded-sm py-3 px-6 lg:px-10 font-semibold text-xs md:text-lg lg:text-xl text-white-color hover:text-black transition-all duration-300">
              Discount
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
