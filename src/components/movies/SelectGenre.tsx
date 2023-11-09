import React from 'react'
import { genres } from './genres';
import { Genre } from '../../types/types';


interface SelectProps {
  setGenre: React.Dispatch<React.SetStateAction<string>>;
  setNum: React.Dispatch<React.SetStateAction<number>>;
  /* setSelectedOptions: React.Dispatch<React.SetStateAction<Genre[] | undefined>>;
  setCurrentOption: React.Dispatch<React.SetStateAction<Genre | undefined>>;
  selectedOptions: Genre[] | undefined;
  currentOption: Genre | undefined; */
  genresList: Genre[];
}






const SelectGenre = ({setGenre,setNum,genresList}: SelectProps) => {






  return (
    <select
      onChange={(e) => {
        e.preventDefault();
        setGenre(e.target.value);
        setNum(1);
      }}
      className="px-2 input"
    >
      <option value="">Select Genre</option>
      {genresList.map((g) => (
        <option key={g.id} value={g.id}>
          {g.name}
        </option>
      ))}
    </select>
  );
};

export default SelectGenre