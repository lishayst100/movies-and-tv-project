import React, { useEffect, useState } from 'react'
import { Movie, TvShow } from '../../types/types'
import { useParams } from 'react-router-dom';
import { API_KEY, BASE_URL } from '../../services/API';
import FrontMovie from '../movies/FrontMovie';
import FrontTv from '../tv/FrontTv';
import NextPrevBtns from '../movies/NextPrevBtns';

const Search = () => {
    const {search,kind} = useParams()
    const [movies, setMovies] = useState<Movie[]>([]);
    const [tv, setTv] = useState<TvShow[]>([])
    const [num, setNum] = useState(1);
  const url = `${BASE_URL}/search/${kind}?${API_KEY}&query=${search}&page=${num}`;
   
    const searchMovie = () => {
    fetch(url)
   .then((res) => res.json())
   .then((result) => kind === 'movie' ? setMovies(result.results) : setTv(result.results));
    }

    
 useEffect(() => {
   searchMovie();
 }, [url ]);
    

    
    

  return (
    <div>
      <h4 className="text-center pt-5">
        Your search For {search} from {kind}
      </h4>
      <div className="w-75 mx-auto d-flex flex-wrap gap-3 justify-content-center align-items-center pt-5 ">
        {kind === "movie"
          ? movies.map((m) => {
              return <FrontMovie key={m.id} {...m} />;
            })
          : tv.map((t) => <FrontTv key={t.id} {...t} />)}
      </div>
      <NextPrevBtns num={num} setNum={setNum}/>
    </div>
  );
}

export default Search