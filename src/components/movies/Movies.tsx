import {useState,useEffect} from 'react'
import { Movie} from '../../types/types'
import { API_KEY, BASE_URL} from '../../services/API'
import FrontMovie from './FrontMovie'
import SelectSortBy from './SelectCom'
import SelectGenre from './SelectGenre'
import NextPrevBtns from './NextPrevBtns'
import SkeletonList from '../skeleton/SkeletonList'
import { genres } from './genres'



const Movies = () => {
    const [movies, setMovies] = useState<Movie[]>()
    const [isLoading, setIsLoading] = useState(false)
    const [sortBy , setSortBy] = useState('')
    const [genre, setGenre] = useState('');
    const [num ,setNum] = useState(1)
    const url = `${BASE_URL}/discover/movie?${API_KEY}${sortBy}&with_genres=${genre}&include_adult=false&page=${num}`;
    
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
          <SelectGenre
            genresList={genres}
            setGenre={setGenre}
            setNum={setNum}
          />
          <SelectSortBy setSortBy={setSortBy} setNum={setNum} />
        </div>
      </div>
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


