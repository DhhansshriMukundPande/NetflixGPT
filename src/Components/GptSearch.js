import React from 'react'
import GptSearchBar from './GptSearchBar.js'
import GptMovieSuggestion from './GptMovieSuggestion.js'
import { IMG_URL } from '../Utils/Constants.js'

const GptSearch = () => {
  return (
    <div>
       <div className=' fixed -z-10'> 
         <img className=""src ={IMG_URL}  alt="bgimage"/>   
        </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>


    </div>
  )
}

export default GptSearch