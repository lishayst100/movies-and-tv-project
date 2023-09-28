import React, { useEffect, useState } from 'react'
import { BASE_URL, API_KEY } from '../../services/API';
import { Movie } from '../../types/types';
import FrontMovie from '../movies/FrontMovie';
import './Trending.scss'
import ImageSlider from '../header/ImageSlider';

type TrendingProps ={ 
  movies: Movie[]
}


const TrendingList = ({movies}:TrendingProps) => {
     
  return (
    <div className="trending-list">
     <ImageSlider images={movies}/>
    </div>
  );
}

export default TrendingList