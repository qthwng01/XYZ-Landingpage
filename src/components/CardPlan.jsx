import { motion } from 'framer-motion'
import { fadeIn } from '../constants'

import PricePlan from './PricePlan'
import { planStart, planAdvance, planPremium } from '../constants'
import { FaCircle } from 'react-icons/fa'

const CardPlan = ({ isYearly }) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.3)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-2 gap-8 md:gap-6 lg:gap-20 lg:mt-[5rem]"
    >
      <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-auto shadow-3xl p-4 md:p-6 lg:p-8 flex justify-center cursor-pointer">
        <div className="plan__inside">
          <h3 className="text-center text-3xl font-bold text-primary-color mb-7">
            Start
          </h3>
          <p className="text-center md:text-[14px] mb-10">
            A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <div className="flex justify-center items-end mb-6">
            <PricePlan isYearly={isYearly} priceYearly="30" priceMonthly="50" />
          </div>
          <ul className="mb-8 flex flex-col flex-wrap">
            {planStart.map((item) => (
              <li
                className="font-semibold py-3 inline-flex items-center"
                key={item.id}
              >
                <FaCircle
                  className={`mr-2 ${
                    item.color === 'green' ? 'text-[#39DC98]' : 'text-[#FD809E]'
                  }`}
                />
                {item.name}
              </li>
            ))}
          </ul>
          <div className="text-center mb-8">
            <a className="py-3 px-10 rounded-[20px] border-2 border-secondary-color text-secondary-color font-semibold hover:text-white hover:bg-secondary-color transition-all duration-300">
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-auto shadow-3xl p-4 md:p-6 lg:p-8 flex justify-center cursor-pointer">
        <div className="plan__inside">
          <h3 className="text-center text-3xl font-bold text-primary-color mb-7">
            Advance
          </h3>
          <p className="text-center md:text-[14px] mb-10">
            A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <div className="flex justify-center items-end mb-6">
            <PricePlan isYearly={isYearly} priceYearly="60" priceMonthly="80" />
          </div>
          <ul className="mb-8 flex flex-col flex-wrap">
            {planAdvance.map((item) => (
              <li
                className="font-semibold py-3 inline-flex items-center"
                key={item.id}
              >
                <FaCircle
                  className={`mr-2 ${
                    item.color === 'green' ? 'text-[#39DC98]' : 'text-[#FD809E]'
                  }`}
                />
                {item.name}
              </li>
            ))}
          </ul>
          <div className="text-center mb-8">
            <a className="py-3 px-10 rounded-[20px] border-2 border-secondary-color text-secondary-color font-semibold hover:text-white hover:bg-secondary-color transition-all duration-300">
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-auto shadow-3xl p-4 md:p-6 lg:p-8 flex justify-center cursor-pointer">
        <div className="plan__inside">
          <h3 className="text-center text-3xl font-bold text-primary-color mb-7">
            Premium
          </h3>
          <p className="text-center md:text-[14px] mb-10">
            A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <div className="flex justify-center items-end mb-6">
            <PricePlan
              isYearly={isYearly}
              priceYearly="80"
              priceMonthly="100"
            />
          </div>
          <ul className="mb-8 flex flex-col flex-wrap">
            {planPremium.map((item) => (
              <li
                className="font-semibold py-3 inline-flex items-center"
                key={item.id}
              >
                <FaCircle
                  className={`mr-2 ${
                    item.color === 'green' ? 'text-[#39DC98]' : 'text-[#FD809E]'
                  }`}
                />
                {item.name}
              </li>
            ))}
          </ul>
          <div className="text-center mb-8">
            <a className="py-3 px-10 rounded-[20px] border-2 border-secondary-color text-secondary-color font-semibold hover:text-white hover:bg-secondary-color transition-all duration-300">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CardPlan
