import React from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import { voteAverageCalcDetails } from './MovieDetails'

interface RatingProps {
vote_average:number
handleIsOpen: ()=>void
} 

const RatingTrailer = ({vote_average,handleIsOpen}:RatingProps) => {

   const voteAverage = voteAverageCalcDetails(vote_average);

  return (
    <a href='#trailer' className="rating-trailer">
      <div className="wrapper-rating">
        {voteAverage}
      </div>
      <div onClick={handleIsOpen} className="d-flex justfiy-content-center align-items-center play-container">
        <AiFillPlayCircle className="play-icon" />
        <span className='play-text'>Play Trailer</span>
      </div>
    </a>
  );
}

export default RatingTrailer