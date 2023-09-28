import React, { useEffect, useState } from "react";
import { Movie } from "../../types/types";
import { API_KEY, BASE_URL } from "../../services/API";
import "../trending/Trending.scss";
import SliderList from "../popular/PopularList";
import SkeletonSlider from "../skeleton/SkeletonSlider";
import TopRated from "../top-rated/TopRated";

type Props = {
  id: string | undefined;
};

const Recommendations = ({ id }: Props) => {
  const [movies, setMovies] = useState<Movie[]>();
  
  const url = `${BASE_URL}/movie/${id}/recommendations?${API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setMovies(result.results);
      }).catch(e => console.log(e))
  }, [id, url]);

  if (!movies) {
    return <SkeletonSlider />;
  }
  return (
    <div>
      <div className="padding-bottom">
        <>
          {movies.length <= 0 ? (
            <TopRated />
          ) : (
            <div>
              <h2 className="d-flex justify-content-between mx-auto align-items-center title-trending pb-4">
                Recommended Movies
              </h2>
              <SliderList movies={movies} setMovies={setMovies} url={url} />
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Recommendations;
