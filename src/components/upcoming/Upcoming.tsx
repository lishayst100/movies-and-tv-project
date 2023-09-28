import React, { useState } from "react";
import SliderList from "../popular/PopularList";
import { BASE_URL, API_KEY } from "../../services/API";
import { Movie } from "../../types/types";

const Upcoming = () => {
  const [movies, setMovies] = useState<Movie[]>();
  const url = `${BASE_URL}/movie/upcoming?${API_KEY}`;

  return (
    <div className="padding-bottom">
      <div className="d-flex justify-content-between mx-auto align-items-center title-trending pb-4">
        <h2>Upcoming Movies</h2>
      </div>
      <SliderList movies={movies} setMovies={setMovies} url={url} />
    </div>
  );
};

export default Upcoming;
