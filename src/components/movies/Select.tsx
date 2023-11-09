import React, { useState } from "react";
import { genres } from "./genres";


interface Genre {
  id: number;
  name: string;
}


interface Props {
  setCurrentGenre: React.Dispatch<React.SetStateAction<Genre | null>>;
  setSelectedGenres: React.Dispatch<React.SetStateAction<Genre[]>>;
  selectedGenres: Genre[];
  currentGenre: Genre | null
}

const Select = ({currentGenre,selectedGenres,setCurrentGenre,setSelectedGenres}:Props) => {
  
  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenreId: number = parseInt(e.target.value,10);

    const selectedGenre: Genre | undefined = genres.find(
      (genre) => genre.id === selectedGenreId
    );

    if (selectedGenre) {
      if (selectedGenres.some((g) => g.id === selectedGenre.id)) {
        const updatedGenres = selectedGenres.filter(
          (genre) => genre.id !== selectedGenre.id
        );
        setSelectedGenres(updatedGenres);
      } else {
        setSelectedGenres([...selectedGenres, selectedGenre]);
      }

     
      setCurrentGenre(null);
    }
  };


  

  return (
    <div>
      <select
        value={currentGenre?.id || ""}
        onChange={handleGenreChange}
        className="input px-2"
      >
        <option value="">Select a Genre</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      
    </div>
  );
};

export default Select;
