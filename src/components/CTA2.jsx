import { motion } from 'framer-motion'
import { fadeIn } from '../constants'

import cta2 from '../images/cta2.png'

const CTA2 = () => {
  return (
    <div id="cta-2" className="pt-[8rem] -mt-[3.25rem] md:-mt-[1.25rem]">
      <div className="container mx-auto max-w-full relative z-0 md:px-12 p-4">
        <motion.div
         variants={fadeIn('up', 0.2)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col-reverse lg:flex-row">
          <div className="lg:w-2/4 w-full">
            <div className="xl:pt-[4rem] xl:pl-[5rem]">
              <h2 className="font-semibold text-3xl lg:text-[2.5rem] xl:text-6xl text-primary-color w-full leading-normal lg:leading-relaxed lg:mb-4">
                You can Practice at any
              </h2>
              <h2 className="font-semibold text-3xl lg:text-[2.5rem] xl:text-6xl text-secondary-color leading-normal lg:leading-relaxed mb-4">
                time convinent for you.
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
            </div>
          </div>
          <div className="lg:w-2/4 w-full">
            <img className="lg:w-screen w-full h-auto xl:pr-[2rem]" src={cta2} alt="cta" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA2
