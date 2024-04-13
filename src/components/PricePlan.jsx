import React from 'react'

const PricePlan = ({ isYearly, priceYearly, priceMonthly }) => {
  return (
    <React.Fragment>
      {isYearly ? (
        <>
          <strong className="text-5xl text-secondary-color">{priceYearly}$</strong>
          <span className='dark:text-slate-400'>/yearly</span>
        </>
      ) : (
        <>
          <strong className="text-5xl text-secondary-color">{priceMonthly}$</strong>
          <span className='dark:text-slate-400'>/month</span>
        </>
      )}
    </React.Fragment>
  )
}

export default PricePlan
