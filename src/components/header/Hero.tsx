import { useEffect, useState } from 'react'
import './Hero.scss'
import { useNavigate } from 'react-router-dom'
import { Movie } from '../../types/types'
import { BASE_URL, API_KEY } from '../../services/API'
import OverlayImg from './OverlayImg'
import BtnPrefered from "./BtnPrefered";
import HeroText from './HeroText'
import Searching from './Searching'
import Required from './Required'
import { ColorRing } from 'react-loader-spinner'

const Hero = () => {
  const [search, setSearch] = useState("");
  const [kind, setKind] = useState("movie");
  const [isEmpty , setIsEmpty] = useState(false)
  const [movies , setMovies] = useState<Movie[]>()
  const [selected, setSelected] = useState<null | number>(0)
  const nav = useNavigate();
  const url ='https://api.themoviedb.org/3/discover/movie?api_key=a89312570d60a3a704e63947bc7bce96';
  
  
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(result => {
      setMovies(result.results)
      
    })
  }, [url]);
  if(!movies){
    return <ColorRing/>
  }

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

 

    

  const IMG_URL = `url(https://image.tmdb.org/t/p/original${movies[1].backdrop_path})`;
  const handleSearch = () => {
    if(search !== '' ){
      nav(`/search/${kind}/${search}`);
    }else{
      setIsEmpty(true)
    }
    
  };


  


  return (
    <>
      {!movies ? (
        <ColorRing />
      ) : (
        <div className="hero">
          <OverlayImg imgUrl={IMG_URL} />
          <div className="text-container d-flex flex-column justify-content-center align-items-center px-3">
            <HeroText handleSearch={handleSearch} setSearch={setSearch} />
            {isEmpty && <Required />}
            <Searching />
            <BtnPrefered
              selected={selected}
              setKind={setKind}
              toggle={toggle}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Hero
