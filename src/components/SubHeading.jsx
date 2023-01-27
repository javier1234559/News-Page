import React from 'react'

const SubHeading = ({children,customclass}) => {
  return (
    <div className=''>
      <h4 className={`text-[30px] leading-[50px] mb-8 text-justify ${customclass}`}>
        {children}
      </h4>
    </div>
  )
}

export default SubHeading