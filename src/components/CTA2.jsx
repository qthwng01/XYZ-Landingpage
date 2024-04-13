import { motion } from 'framer-motion'
import { fadeIn } from '../constants'

import cta2 from '../images/cta2.png'

const CTA2 = () => {
  return (
    <div id="cta-2" className="pt-[8rem] -mt-[3.25rem] md:-mt-[1.25rem]">
      <div className="container mx-auto max-w-full relative z-0 md:px-12 p-4">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="pt-[2rem] lg:w-2/4 w-full">
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="xl:pt-[4rem]"
            >
              <h2 className="font-semibold text-3xl lg:text-[2.5rem] xl:text-6xl text-primary-color w-full leading-normal lg:leading-relaxed lg:mb-4 dark:text-blue-600">
                You can Practice at any
              </h2>
              <h2 className="font-semibold text-3xl lg:text-[2.5rem] xl:text-6xl text-secondary-color leading-normal lg:leading-relaxed mb-4">
                time convinent for you.
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
            </motion.div>
          </div>
          <div className="lg:w-2/4 w-full">
            <motion.img
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false }}

              className="lg:w-screen w-full h-auto xl:pr-[2rem] dark:rounded-xl dark:pr-0"
              src={cta2}
              alt="cta"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA2
