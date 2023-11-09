import {useState,useEffect} from 'react'
import { Genre, Movie} from '../../types/types'
import { API_KEY, BASE_URL} from '../../services/API'
import FrontMovie from './FrontMovie'
import SelectSortBy from './SelectCom'
import NextPrevBtns from './NextPrevBtns'
import SkeletonList from '../skeleton/SkeletonList'
import Select from './Select'
import GenreList from './GenreList'



const Movies = () => {
    const [movies, setMovies] = useState<Movie[]>()
    const [isLoading, setIsLoading] = useState(false)
    const [sortBy , setSortBy] = useState('')
    const [num ,setNum] = useState(1)
    const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
    const [currentGenre, setCurrentGenre] = useState<Genre | null>(null);
    const arr: number[] = [];
    selectedGenres.forEach((g) => {
      arr.push(g.id);
    });
    const url = `${BASE_URL}/discover/movie?${API_KEY}${sortBy}&with_genres=${arr.join(
      ","
    )}&include_adult=false&page=${num}`;
    
    useEffect(()=>{
        setIsLoading(true)
         fetch(url)
        .then(res => res.json())
        .then(data => {
            setMovies(data.results)
            setIsLoading(false) 
        }).catch((e)=>{
            console.log(e)
        }) 
    },[url])

    if(!movies){
      return <SkeletonList/>;
    }



  return (
    <div>
      <div className="d-flex flex-sm-column flex-lg-row justify-content-around  align-items-center py-5 gap-3 select-conatiner">
        <h3 className="m-0 p-0">Explore Movies</h3>

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
      {isLoading && <SkeletonList />}

      <div className="movies-list row mx-auto">
        {!isLoading &&
          movies!?.map((movie) => <FrontMovie {...movie} key={movie.id} />)}
      </div>
      <NextPrevBtns num={num} setNum={setNum} />
    </div>
  );
}

export default Movies


