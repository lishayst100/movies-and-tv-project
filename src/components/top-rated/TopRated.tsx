import React, { useState } from 'react'
import SliderList from '../popular/PopularList';
import { BASE_URL, API_KEY } from '../../services/API';
import { Movie } from '../../types/types';

const TopRated = () => {
     const [movies, setMovies] = useState<Movie[]>();
     const url = `${BASE_URL}/movie/top_rated?${API_KEY}`;

  return (
    <div className="padding-bottom">
      <div className="d-flex justify-content-between mx-auto align-items-center title-trending pb-4">
        <h2>Top Rated Movies</h2>
      </div>
      <SliderList movies={movies} setMovies={setMovies} url={url} />
    </div>
  );
}

export default TopRated