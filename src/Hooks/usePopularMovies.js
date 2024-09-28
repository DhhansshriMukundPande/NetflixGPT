import  { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/Constants'
import { addPopularMovies } from '../Utils/movieSlice'
import { useDispatch } from 'react-redux'

const usePopularMovies = () => {
    const dispatch = useDispatch();
 
  const getPopularMovies =  async() =>{
    const data = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',API_OPTIONS);
    const json = await data.json();
    console.log(json)
    dispatch(addPopularMovies(json.results))
  }


  useEffect (()=>{
    getPopularMovies();
  },[]) 
}

export default usePopularMovies;