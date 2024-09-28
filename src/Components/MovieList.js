import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log(movies)
    return (
      <div className='px-2'>
         <h1 className='text-2xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide '>
         
          <div className='flex'>
          {movies && movies.length > 0 ? (
            movies.map(movie => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p>No movies available</p>
            )
          }
          </div>
        </div>
      </div>
    );
  }

export default MovieList