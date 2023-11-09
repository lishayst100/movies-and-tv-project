import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { Genre } from '../../types/types';



interface Props {
  setSelectedGenres: React.Dispatch<React.SetStateAction<Genre[]>>;
  selectedGenres: Genre[];
}

const GenreList = ({selectedGenres,setSelectedGenres}:Props) => {
    const handleRemoveGenre = (genre: Genre) => {
      const updatedGenres = selectedGenres.filter((g) => g.id !== genre.id);
      setSelectedGenres(updatedGenres);
    };
  return (
    <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center pb-5">
      {selectedGenres.map((genre, index) => (
        <span key={index} className="d-flex gap-1 p-2  genre-pick">
          <span>{genre.name}</span>
          <AiOutlineClose
            onClick={() => handleRemoveGenre(genre)}
            className="pointer"
          />
        </span>
      ))}
    </div>
  );
}

export default GenreList