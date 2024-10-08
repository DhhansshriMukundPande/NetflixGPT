import React from 'react'
import lang from '../Utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import run from '../Utils/geminiai'
import {API_OPTIONS} from '../Utils/Constants'
import { addGptMovieresult } from '../Utils/gptSlice'

const GptSearchBar = () => {
 
  const dispatch =useDispatch();
  const langKey = useSelector(store => store.config.lang)
  const searchText =useRef(null)


  const searchMovieTMDB = async (movie)=>{
     const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
  const json= await data.json();
     return json.results
  }

 const handleGptSearchClick = async() =>
 { 
 //make api call to gpt api and get movie result
  const gptQuery="Act as a Movie Recommendation system and suggest some movies for the query :" +searchText.current.value + ".only  give me names of 5 movies,comma seperated like the example result given ahead. Example result: gadar,sholay,don,golmaal,koi mil gaya "

const gptResults = await run(gptQuery);
    console.log(gptResults)

   const gptMovies = gptResults.split(",");
   console.log(gptMovies)
 
  const promiseArray =gptMovies.map((movie)=>searchMovieTMDB(movie));

  const tmdbResults= await Promise.all(promiseArray)
  console.log(tmdbResults)
   dispatch(addGptMovieresult({movieNames:gptMovies,movieResults:tmdbResults}))
  
   }


 
  return (
    <div className='pt-[12%] flex justify-center'>
        <form className=' w-1/2  bg-black grid grid-cols-12'onSubmit={(e)=>e.preventDefault()}>
        <input 
        ref={searchText}
        type ="text" 
        className='p-4 m-4 col-span-9' 
        placeholder={lang[langKey].gptSearchPlaceholder}>
        </input>
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
        onClick={handleGptSearchClick}>
         {lang[langKey].search}
        </button>
        </form>


    </div>
  )
}

export default GptSearchBar