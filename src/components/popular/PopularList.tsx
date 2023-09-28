import React, { useEffect } from 'react'
import { ColorRing } from 'react-loader-spinner';
import ImageSlider from '../header/ImageSlider';
import { Movie } from '../../types/types';
import SkeletonSlider from '../skeleton/SkeletonSlider';


type SliderProps = {
  url: string;
  movies: Movie[] | undefined;
  setMovies: React.Dispatch<React.SetStateAction<Movie[] | undefined>>;
};

const SliderList = ({url,movies,setMovies}:SliderProps) => {
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((result) => setMovies(result.results))
        .catch((e) => console.log(e));
    }, [url]);

  return (
    <div className="trending-list">
      {!movies ? <SkeletonSlider /> : <ImageSlider images={movies} />}
    </div>
  );
}

export default SliderList;