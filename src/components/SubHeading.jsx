import React from 'react'

const SubHeading = ({children,customclass}) => {
  return (
    <div className=''>
      <h4 className={`text-[30px] leading-[50px] b-8 ${customclass}`}>
        {children}
      </h4>
    </div>
  )
}

export default SubHeading