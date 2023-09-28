import React, { useEffect, useState } from 'react'
import { Genre, Movie } from "../../types/types";

import '../trending/Trending.scss'
import SliderList from '../popular/PopularList';
import SkeletonSlider from '../skeleton/SkeletonSlider';
import Upcoming from '../upcoming/Upcoming';

type Props = {
    genres:Genre[]
    id:string | undefined
}

const SimilarMovies = ({genres,id}:Props) => {
    const [movies, setMovies] = useState<Movie[]>()
    //const url = `${BASE_URL}/discover/movie?${API_KEY}&with_genres=${idString}&include_adult=false`;
    const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=b3b1492d3e91e9f9403a2989f3031b0c`;
    

useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(result => setMovies(result.results))
        
    },[id,url])
        
    if(!movies){
        return <SkeletonSlider/>
    }
  return (
    <div>
      <div className="padding-bottom">
        <div className="d-flex justify-content-between mx-auto align-items-center title-trending pb-4"></div>
        {movies.length <= 0 ? (
          <Upcoming />
        ) : (
          <>
            <h2 className="d-flex justify-content-between mx-auto align-items-center title-trending pb-4">
              Similar Movies
            </h2>
            <SliderList movies={movies} setMovies={setMovies} url={url} />
          </>
        )}
      </div>
    </div>
  );
}

export default SimilarMovies