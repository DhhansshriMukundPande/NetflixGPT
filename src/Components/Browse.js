import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies"
import MainContainer from './MainContainer'
import SecondaryContainer from "./SecondaryContainer"
import useTrendingMovies from '../Hooks/useTrendingMovies'
import usePopularMovies from '../Hooks/usePopularMovies'
import useHorrorMovies from '../Hooks/useHorrorMovies'

const Browse = () => {
  
 useNowPlayingMovies();
 useTrendingMovies();
 usePopularMovies();
 useHorrorMovies();
  
  return (
    <div>
      <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    
    </div>
  )
}

export default Browse;