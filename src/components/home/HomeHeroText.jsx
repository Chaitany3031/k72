import React from 'react'
import Video from '../home/Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] text-center pt-5'>
      <div className='text-[9.5vw] leading-[8vw] justify-center flex items-center uppercase'>The spark</div>
      <div className='text-[9.5vw] leading-[8vw] justify-center flex items-center uppercase'>who</div>
      <div className='h-[7vw] rounded-full overflow-hidden -mt-5'><Video/></div>
      <div className='text-[9.5vw] leading-[9.5vw] justify-center flex items-center uppercase'>Generates</div>
      <div className='text-[9.5vw] leading-[8vw] justify-center flex items-center uppercase'>the creativity</div>
    </div>
  )
}

export default HomeHeroText