import React from 'react'
import { IMG_CDN_URL } from '../Utils/Constants'

const MovieCard = ({posterPath}) => {
if(!posterPath) return  null;

  return (
<div className='w-24 md:w-40 pr-4'>
<img src={IMG_CDN_URL + posterPath}  alt="movie card" />



</div>
  )
}

export default MovieCard