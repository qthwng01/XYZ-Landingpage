import React from 'react'

const FooterItems = ({ attr }) => {
  return (
    <React.Fragment>
      {attr?.map(({ fi }, index) => (
        <ul key={index}>
          <li className="py-2 cursor-pointer opacity-70 hover:opacity-100">
            {fi}
          </li>
        </ul>
      ))}
    </React.Fragment>
  )
}

export default FooterItems
