import  { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/Constants'
import { addPopularMovies } from '../Utils/movieSlice'
import { useDispatch, useSelector } from 'react-redux'

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingPopularMovies = useSelector(store =>store.movies.PopularMovies)
  const getPopularMovies =  async() =>{
    const data = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',API_OPTIONS);
    const json = await data.json();
  
    dispatch(addPopularMovies(json.results))
  }


  useEffect (()=>{
    if(!nowPlayingPopularMovies)
    getPopularMovies();
  },[]) 
}

export default usePopularMovies;