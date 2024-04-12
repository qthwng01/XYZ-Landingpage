import { useState } from 'react'
import CardPlan from './CardPlan'

const Plan = () => {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div id="pricing" className="pt-[8rem] -mt-[2.25rem] md:-mt-[1.25rem]">
      <div className="container max-w-full md:px-12 p-4">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-4xl leading-tight lg:text-5xl font-bold text-primary-color mb-2">
            Here are all our plans
          </h2>

          <p className="text-center text-xs font-semibold leading-normal tracking-tight text-p-section-color mb-8 lg:w-1/4">
            A simple paragraph is comprised of three major components. The which
            is often a declarative sentence.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex flex-row items-center justify-center lg:mt-[4rem] mb-8 lg:mb-12">
          <h3 className="mr-10 text-2xl font-bold text-primary-color">
            Monthly
          </h3>
          <label className="inline-flex items-center cursor-pointer">
            <input
              onChange={() => setIsYearly(!isYearly)}
              type="checkbox"
              value=""
              className="sr-only peer"
            />
            <div
              className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4
             rounded-full peer
              dark:bg-gray-700 peer-checked:after:translate-x-full 
              rtl:peer-checked:after:-translate-x-full peer-checked:after:border-gray-200 after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
              after:bg-gray-200 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
               dark:border-gray-600 peer-checked:bg-secondary-color"
            ></div>
          </label>
          <h3 className="ml-10 text-2xl font-bold text-primary-color">
            Yearly
          </h3>
        </div>

        {/* Card */}
        <CardPlan isYearly={isYearly} />
      </div>
    </div>
  )
}

export default Plan
