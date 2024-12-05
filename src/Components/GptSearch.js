import React from 'react'
import GptSearchBar from './GptSearchBar.js'
import GptMovieSuggestion from './GptMovieSuggestion.js'
import { IMG_URL } from '../Utils/Constants.js'

const GptSearch = () => {
  return (
    <>
       <div className='fixed -z-10'> 
         <img className="w-full h-screen object-cover md:h-full "src ={IMG_URL}  alt="backgroundimage"/>   
        </div>
        <div className='p-4'>
         
      <GptSearchBar/>
      <GptMovieSuggestion/>
      </div>
      
      

    </>
  )
}

export default GptSearch