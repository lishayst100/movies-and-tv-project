import React from 'react'
import { Cast } from '../../types/types'
import { placeHolderCast } from '../../services/API';
import './MovieDetails.scss'


const SingleCast = ({character,name,profile_path,id}:Cast) => {
  const shortName = name.slice(0,14)
  const shortCharacter = character.slice(0, 14);

  return (
    <div key={id}>
      <img
        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
        onError={({ currentTarget }) => {
          currentTarget.src = placeHolderCast;
        }}
        alt=""
        className="cast-img"
      />
      <div className="d-flex justify-content-center align-items-center flex-column text-center flex-wrap">
        <span className="cast-name">{shortName}</span>
        <span className="cast-character">{shortCharacter}</span>
      </div>
    </div>
  );
}

export default SingleCast;