import React from 'react'

const Heading = ({children, customclass}) => {
  return (
    <div className= {`mb-8 md:text-[38px] text-[30px] leading-[50px] font-semibold  ${customclass}`}>
        <h2 className=''>{children}</h2>
    </div>
  )
}

export default Heading