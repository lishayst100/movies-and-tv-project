
import { useEffect, useState } from 'react'
import Skeleton from '../skeleton/Skeleton'
import SkeletonList from '../skeleton/SkeletonList'
import FrontTv from './FrontTv'
import {Genre, TvShow } from "../../types/types";
import NextPrevBtns from '../movies/NextPrevBtns';
import { BASE_URL, API_KEY } from '../../services/API';
import SelectGenre from '../movies/SelectGenre';
import { genres } from './aaa';
import SelectSortBy from '../movies/SelectCom';
import Select from '../movies/Select';
import GenreList from '../movies/GenreList';


const Tv = () => {
    const [tv, setTv] = useState<TvShow[]| null>(null);
    const [num, setNum] = useState(1);
    const [sortBy, setSortBy] = useState("");
    const [genre, setGenre] = useState("");
    const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
    const [currentGenre, setCurrentGenre] = useState<Genre | null>(null);
    const arr: number[] = [];
    selectedGenres.forEach((g) => {
      arr.push(g.id);
    });
     const url = `${BASE_URL}/discover/tv?${API_KEY}&page=${num}&${sortBy}&with_genres=${arr.join(
       ","
     )}`;

    useEffect(()=>{
      fetch(url)
        .then((res) => res.json())
        .then((result) =>
          setTv(result.results)
        );
    })



  return (
    <div>
      <div>
        <div className="d-flex flex-sm-column flex-lg-row justify-content-around  align-items-center py-5 gap-3 select-conatiner">
          <h3 className="m-0 p-0">Explore TV Shows</h3>
          <div className="gap-2 d-flex flex-wrap justify-content-center align-items-center ">
            <Select
              currentGenre={currentGenre}
              selectedGenres={selectedGenres}
              setSelectedGenres={setSelectedGenres}
              setCurrentGenre={setCurrentGenre}
            />
            <SelectSortBy setSortBy={setSortBy} setNum={setNum} />
          </div>
        </div>
        <GenreList
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
        />

        <div className="movies-list row mx-auto">
          {tv === null ? (
            <SkeletonList />
          ) : (
            tv!?.map((t) => <FrontTv {...t} key={t.id} />)
          )}
        </div>
        <NextPrevBtns num={num} setNum={setNum} />
      </div>
    </div>
  );
}

export default Tv