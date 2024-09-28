import React from 'react'


const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[16%] px-24 absolute bg-gradient-to-r from-black'>
        <h1 className='text-6xl text-white font-bold'>{title}</h1>
        <p className='py-6 text-white text-lg w-1/4'>{overview}</p>
        <div className='flex'>
        <button className=' flex bg-white text-black py-2  px-6 rounded-md hover:bg-opacity-80'>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none">
  <path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z" fill="#000000"/>
</svg> Play</button>
        <button className='ml-2 bg-gray-500 text-white py-2 px-6 bg-opacity-50 rounded-md'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle