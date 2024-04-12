import { motion } from 'framer-motion'
import { fadeIn } from '../constants'

import cta1 from '../images/cta1.png'

const CTA1 = () => {
  return (
    <div id="about" className="pt-[8rem] -mt-[3.25rem] md:-mt-[1.25rem]">
      <div className="container mx-auto max-w-full relative z-0 md:px-12 p-4">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="lg:w-2/4"
          >
            <img className="lg:w-screen w-full h-auto" src={cta1} alt="cta" />
          </motion.div>
          <div className="lg:w-2/4">
            <motion.div
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="xl:pt-[4rem]"
            >
              <h2 className="font-semibold text-[32px] lg:text-[2.5rem] xl:text-6xl text-primary-color w-full xl:w-11/12 leading-normal xl:leading-relaxed">
                We have been improving our product
              </h2>
              <h2 className="font-semibold text-[32px] lg:text-[2.5rem] xl:text-6xl text-secondary-color leading-normal mb-4">
                for many years.
              </h2>
              <p className="text-p-section-color font-medium text-sm md:text-lg">
                A good example of a paragraph contains a topic conclusion.
              </p>
              <p className="text-p-section-color font-medium text-sm md:text-lg mb-6">
                &apos;There are many different kinds of animals that live in
                China.
              </p>
              <button className="px-6 py-4 md:px-8 text-sm md:text-xl rounded-sm font-medium text-white-color bg-secondary-color ">
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA1
