import React, { useState } from 'react'
import SliderList from './PopularList'
import '../trending/Trending.scss'
import { Movie } from '../../types/types'
import { API_KEY, BASE_URL } from '../../services/API'




const Popular = () => {
    const [movies, setMovies] = useState<Movie[]>()
    const url = `${BASE_URL}/movie/popular?${API_KEY}`;
  return (
    <div className="padding-bottom">
      <div className="d-flex justify-content-between mx-auto align-items-center title-trending pb-4">
        <h2>Popular Movies</h2>
      </div>

      <SliderList movies={movies} setMovies={setMovies} url={url} />
    </div>
  );
}

export default Popular