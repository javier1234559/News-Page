import React from 'react'
import styles from '../tailwind-styles'

const Paragragh = ({children, customclass}) => {
  return (
    <p className={` ${customclass} ${styles.paragraph} my-4`}>{children}</p>
  )
}

export default Paragragh
