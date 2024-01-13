import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-5 py-1 m-2 pl-5 mt-11 bg-gray-100 hover:bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button
