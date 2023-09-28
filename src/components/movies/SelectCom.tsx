import React from 'react'
import { sortOptions } from './sortBy';

interface SelectProps {
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  setNum:React.Dispatch<React.SetStateAction<number>>;
}


const SelectSortBy = ({setSortBy,setNum}:SelectProps) => {
  return (
    <select
      className="p-2 input"
      onChange={(e) => {
        setSortBy(e.target.value);
        setNum(1)
      }}
    >
      <option value="">Sort By</option>
      {sortOptions.map((sort) => (
        <option key={sort.label} value={sort.value}>
          {sort.label}
        </option>
      ))}
    </select>
  );
}

export default SelectSortBy;