import React, { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/Constants'
import { useDispatch } from 'react-redux'
import { addHorrorMovies } from '../Utils/movieSlice';

const useHorrorMovies = () => {
const dispatch =useDispatch();

const getHorrorMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27',API_OPTIONS)
    const json = await data.json();
    dispatch(addHorrorMovies(json.results));

}
useEffect (()=>{
 getHorrorMovies();
},[])
 
}

export default useHorrorMovies