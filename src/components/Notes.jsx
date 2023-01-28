import React from 'react'
import styles from '../tailwind-styles'


const Notes = ({children, customclass}) => {
  return (
    <div className={`border-l-[5px] max-w-[600px] border-yellow-500 p-4 m-4 bg-[#FDF8E4]`}>
      <h1 className='text-yellow-500 font-semibold text-[20px]'>Lưu ý</h1>
      {children}
    </div>
  )
}

export default Notes