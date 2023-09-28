import React from 'react'
import { Genre } from '../../types/types';

type GenreProps = {
  title: string;
  tagline:string;
  genres:Genre[]
};

const GenreDetails = ({title,genres,tagline}:GenreProps) => {
  return (
    <div>
      <h2 className="title-details">{title}</h2>
      <p className="tagline">{tagline}</p>
      <div className="d-flex gap-3 flex-wrap">
        {genres.map((genre) => (
          <span key={genre.id} className="genre">
            {genre.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default GenreDetails