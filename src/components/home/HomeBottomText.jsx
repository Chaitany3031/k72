import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='bg-red-500 flex items-center justify-center gap-2 font-[font1]'>
      <Link to="/projects">Projects</Link>
      <Link to="/agency">Agency</Link>
    </div>
  )
}

export default HomeBottomText