import React from 'react'
import { Movie} from '../../types/types'
import './Movies.scss'
import { formatDate, placeHolderPoster } from '../../services/API';
import {useNavigate } from 'react-router-dom';




const FrontMovie = ({id,poster_path,release_date,title,vote_average}:Movie) => {
   const formattedDate: string = formatDate(release_date);
   const shortTitle = title.slice(0,18)
  const nav = useNavigate()

  

  const voteAverage = voteAverageCalc(vote_average) 


  const navToDetails = () => {
      nav(`/movie/${id}`);
      window.scrollTo({ top: 0, left: 0 });
  }

  return (
    <div
      className="movie-container col d-flex flex-column"
      onClick={navToDetails}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        className="img-fluid poster-img"
        alt={title}
        onError={({ currentTarget }) => {
          currentTarget.src = placeHolderPoster;
        }}
      />
      <div className="d-flex flex-column justify-content-center align-items-start gap-2 pb-2">
        <span className="title">{shortTitle}</span>
        <span className="release_date">{formattedDate}</span>
      </div>
      <div className="wrapper">
        {voteAverage}
      </div>
    </div>
  );
}

export default FrontMovie


export const voteAverageCalc = (vote: number) => {
  if (vote <= 4) {
    return <span className={"rating red"}>{vote.toFixed(1)}</span>;
  } else if (vote > 4 && vote <= 7) {
    return <span className={"rating orange"}>{vote.toFixed(1)}</span>;
  } else if (vote > 7) {
    return <span className={"rating green"}>{vote.toFixed(1)}</span>;
  }
};