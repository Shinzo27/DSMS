import React from 'react'
import {Link} from 'react-router-dom'

const Button = ({text}) => {
  return (
    <button className='bg-blue-500 text-white font-semibold cursor-pointer hover:scale-105 py-2 px-8 rounded-full relative z-10'>
      <a>{text}</a>
    </button>
  )
}

export default Button