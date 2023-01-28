import React from 'react'

const MultipleList = ({children , customclass}) => {
  return (
    <div className={`md:pl-10  ${customclass} `}>{children}</div>
  )
}

export default MultipleList