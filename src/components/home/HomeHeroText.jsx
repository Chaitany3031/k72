import React from 'react'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] text-center pt-5'>
      <div className='text-[9.5vw] leading-[8vw] justify-center flex items-center uppercase'>The spark</div>
      <div className='text-[9.5vw] leading-[8vw] justify-center flex items-center uppercase'>who</div>
      <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden -mt-3 bg-white/20'><video className='object-cover' autoPlay muted loop src="../../../public/video.mp4"></video></div>
      <div className='text-[9.5vw] leading-[9.5vw] justify-center flex items-center uppercase'>Generates</div>
      <div className='text-[9.5vw] leading-[8vw] justify-center flex items-center uppercase'>the creativity</div>
    </div>
  )
}

export default HomeHeroText