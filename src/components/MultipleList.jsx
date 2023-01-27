import React from 'react'

const MultipleList = ({children , customclass}) => {
  return (
    <ul className={`pl-10 ${customclass} `}>{children}</ul>
  )
}

export default MultipleList