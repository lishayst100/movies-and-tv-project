import React, { useEffect, useState } from 'react'
import TrendingList from './TrendingList'
import { Movie } from '../../types/types'
import { API_KEY, BASE_URL } from '../../services/API'
import './Trending.scss'
import TrendingTitle from './TrendingTitle'
import { ColorRing } from 'react-loader-spinner'
import SkeletonSlider from '../skeleton/SkeletonSlider'

const Trending = () => {

  const [movies, setMovies] = useState<Movie[]>();
  const [time, setTime] = useState("day");
  const [selected, setSelected] = useState<number | null>(0)
  const url = `${BASE_URL}/trending/movie/${time}?${API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setMovies(result.results))
      .catch((e) => console.log(e));
  },[url]);


   const toggle = (i: number) => {
     if (selected === i) {
       return setSelected(null);
     }

     setSelected(i);
   };
       
       return (
          <div className='trending'>
            <TrendingTitle setTime={setTime} toggle={toggle} selected={selected}/>
            {
              !movies ? <SkeletonSlider/> : (<TrendingList movies={movies} />) 
            }
            
          </div>
        );
}

export default Trending