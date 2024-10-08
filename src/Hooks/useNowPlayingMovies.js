import { API_OPTIONS } from '../Utils/Constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addNowPlayingMovies} from "../Utils/movieSlice"

const useNowPlayingMovies = () =>{

  const nowPlayingMovies = useSelector(store =>store.movies.nowPlayingMovies)

    const dispatch =useDispatch()
  const getNowPlayingMovies = async () =>{
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS)
      const json = await data.json();

      dispatch(addNowPlayingMovies(json.results))
  } ;

  useEffect(()=>{
    if(!nowPlayingMovies) getNowPlayingMovies();
  },[])

}
export default useNowPlayingMovies
