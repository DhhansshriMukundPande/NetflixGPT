import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies"
import MainContainer from './MainContainer'
import SecondaryContainer from "./SecondaryContainer"
import useTrendingMovies from '../Hooks/useTrendingMovies'
import usePopularMovies from '../Hooks/usePopularMovies'
import useHorrorMovies from '../Hooks/useHorrorMovies'
import GptSearch from '../Components/GptSearch'
import { useSelector } from 'react-redux'
const Browse = () => {
  const showGptSearch =useSelector(store=>store.gpt.showGptSearch)
 useNowPlayingMovies();
 useTrendingMovies();
 usePopularMovies();
 useHorrorMovies();
  
  return (
    <div>
      <Header/>
      {
      showGptSearch ? (
      <GptSearch/>
    ):
    (
      <>
    <MainContainer/>
    <SecondaryContainer/>
    </>
  )}
  
    </div>
  )
}

export default Browse;