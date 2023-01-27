import React from 'react'
import styles from '../tailwind-styles'

const Image = ({src,customclass}) => {
  return (
    <div className={` my-10  ${styles.flexCenter}`}>
      <img src={src} alt="" className={`w-[70%] md:h-[500px]  md:object-cover object-contain ${customclass}`} />
    </div>
  )
}

export default Image