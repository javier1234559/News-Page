import React from 'react'
import styles from '../tailwind-styles'

const Image = ({src,customclass}) => {
  return (
    <div className={` my-10  ${styles.flexCenter}`}>
      <img src={src} alt="" className={`md:w-[70%] w-[100%] md:h-[500px] object-contain  ${customclass}`} />
    </div>
  )
}

export default Image