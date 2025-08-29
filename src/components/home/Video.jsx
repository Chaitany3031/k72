import React from 'react'
import HomeHeroText from "./HomeHeroText";
import HomeBottomText from "./HomeBottomText";

const Video = () => {
  return (
   <div>
     <div className='w-full h-full'>
      <video className='w-full h-full object-cover fixed' autoPlay muted loop src="../../../public/video.mp4"></video>
    </div>
    <div className='h-screen w-screen relative flex flex-col'>
      <HomeHeroText/>
      <HomeBottomText/>
    </div>
   </div>
  )
}

export default Video