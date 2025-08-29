import React from 'react'
import HomeHeroText from "./HomeHeroText";
import HomeBottomText from "./HomeBottomText";

const Video = () => {
  return (
   <div>
     <div className='w-full h-full'>
      <video className='w-full h-full object-cover fixed' autoPlay muted loop src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756437145~exp=1756440745~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=1aa9b049603fe2dd4599a5d90af10e51ccc624cefccb8062d0f564a6fba31d91&r=dXMtd2VzdDE%3D"></video>
    </div>
    <div className='h-screen w-screen relative flex flex-col'>
      <HomeHeroText/>
      <HomeBottomText/>
    </div>
   </div>
  )
}

export default Video