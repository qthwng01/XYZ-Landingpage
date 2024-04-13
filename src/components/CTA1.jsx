import { motion } from 'framer-motion'
import { fadeIn } from '../constants'

import cta1 from '../images/cta1.png'

const CTA1 = () => {
  return (
    <div id="about" className="pt-[8rem] -mt-[3.25rem] md:-mt-[1.25rem]">
      <div className="container mx-auto max-w-full relative z-0 md:px-12 p-4">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false }}
            className="lg:w-2/4"
          >
            <img className="lg:w-screen w-full h-auto dark:rounded-xl" src={cta1} alt="cta" />
          </motion.div>
          <motion.div
           variants={fadeIn('down', 0.4)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false }}
          className="lg:w-2/4">
            <div className="pt-[2rem] xl:pt-[4rem] xl:pl-[2rem]">
              <h2 className="font-semibold text-[32px] lg:text-[2.5rem] xl:text-6xl text-primary-color w-full xl:w-11/12 leading-normal xl:leading-relaxed dark:text-blue-600">
                We have been improving our product
              </h2>
              <h2 className="font-semibold text-[32px] lg:text-[2.5rem] xl:text-6xl text-secondary-color leading-normal mb-4">
                for many years.
              </h2>
              <p className="text-p-section-color font-medium text-sm md:text-lg dark:text-slate-400">
                A good example of a paragraph contains a topic conclusion.
              </p>
              <p className="text-p-section-color font-medium text-sm md:text-lg mb-6 dark:text-slate-400">
                &apos;There are many different kinds of animals that live in
                China.
              </p>
              <button className="px-6 py-4 md:px-8 text-sm md:text-xl rounded-sm font-medium text-white-color bg-secondary-color ">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA1
