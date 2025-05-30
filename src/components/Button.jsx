import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-4 py-1 m-2 bg-gray-300 rounded hover:bg-gray-800 hover:text-white duration-300'>{name}</button>
    </div>
  )
}

export default Button