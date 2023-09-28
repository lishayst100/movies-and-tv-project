import React from 'react'
import { useNavigate } from 'react-router-dom';
import { formatDate, placeHolderPoster } from '../../services/API';
import { TvShow } from '../../types/types';
import { voteAverageCalc } from '../movies/FrontMovie';

const FrontTv = ({
  id,
  poster_path,
  first_air_date,
  name,
  vote_average,
}: TvShow) => {
  const formattedDate: string = formatDate(first_air_date);
  const shortTitle = name.slice(0, 18);
  const nav = useNavigate();
  const voteAverage = voteAverageCalc(vote_average)

  const navToDetails = () => {
    nav(`/tv/${id}`);
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <div className="movie-container col d-flex flex-column" onClick={navToDetails}>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        className="img-fluid poster-img"
        alt={name}
        onError={({ currentTarget }) => {
          currentTarget.src = placeHolderPoster;
        }}
      />
      <div className="d-flex flex-column justify-content-center align-items-start gap-2 pb-2">
        <span className="title">{shortTitle}</span>
        <span className="release_date">{formattedDate}</span>
      </div>
      <div className="wrapper">{voteAverage}</div>
    </div>
  );
};

export default FrontTv;