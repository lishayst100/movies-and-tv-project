import React from 'react'

interface HeroTextProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void
}


const HeroText = ({setSearch,handleSearch}:HeroTextProps) => {
  return (
    <div>
      <h1 className="title-hero text-center">Welcome</h1>
      <p className="desc-hero text-center">
        Millions of movies, TV shows and people to discover. Explore Now
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <input
          type="text"
          className="input-search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button className="button-87" onClick={handleSearch}>
          Search
        </button>
      </div>
     
    </div>
  );
}

export default HeroText