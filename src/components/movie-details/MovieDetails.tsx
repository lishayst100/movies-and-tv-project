import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { MovieDetails } from '../../types/types'
import { API_KEY, BASE_URL, formatDate } from '../../services/API'
import { ColorRing } from 'react-loader-spinner'
import PosterImg from './PosterImg'
import MoreDetails from './MoreDetails'
import YouTube from 'react-youtube'
import OverlayImg from '../header/OverlayImg'
import GenreDetails from './GenreDetails'
import Overview from './Overview'
import RatingTrailer from './RatingTrailer'
import SimilarMovies from './SimilarMovies'
import Recommendations from './Recommedations'
import CastComp from "./Cast";

const MovieDetail = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState<MovieDetails>()
    const [isOpen, setIsOpen] = useState(false)
    const url = `${BASE_URL}/movie/${id}?${API_KEY}&append_to_response=videos`;
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
     
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((result) => {  
          setMovie(result)
          setIsOpen(false)
        });

    },[id,url]);

    useEffect(() => {
      function handleResize() {
        setScreenWidth(window.innerWidth);
      }

      // Add event listener for window resize
      window.addEventListener("resize", handleResize);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    if (!movie) {
      return <ColorRing />;
    }
    
    const formattedDate: string = formatDate(movie.release_date);
    const bgcImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
    const hours = Math.floor(movie.runtime / 60)
    const minutes = movie.runtime % 60


    
       const handleIsOpen =() => {
            setIsOpen(!isOpen)
        }
    
        const findTrailer = () => {
          if (!movie || !movie.videos || !movie.videos.results) {
            return null; // Handle the case where movie or videos are undefined
          }

          //try to find the official trailer 
          const trailer = movie.videos.results.find(
            (v) => v.name === "Official Trailer"
          );

          //if there isnt official trailer try to find just trailer
          if (!trailer) {
            const searchWord = "Trailer";
            const filteredVideos = movie.videos.results.filter((v) =>
              v.name.includes(searchWord)
            );
            //return the the first trialer if the array length is bigger than 0 if not return null 
            return filteredVideos.length > 0 ? filteredVideos[0] : null;
          }
          //return if found the official trailer object
          return trailer;
        };


        const trailerFinder = findTrailer()
        const trailerVideoId = trailerFinder ? trailerFinder.key : null;
         //if there is trailer return trailer key else return null
        

    

  return (
    <>
      {!movie && <ColorRing />}
      {movie && (
        <div>
          <div className="mx-auto details-container">
            <OverlayImg imgUrl={bgcImage} />
            <div className="text-container details-container">
              <PosterImg poster_path={movie.poster_path} />
              <div className="d-flex flex-column justify-content-center text-details-container gap-4">
                <GenreDetails
                  genres={movie.genres}
                  tagline={movie.tagline}
                  title={movie.title}
                />

                <RatingTrailer
                  handleIsOpen={handleIsOpen}
                  vote_average={movie.vote_average}
                />
                <Overview overview={movie.overview} />
                <MoreDetails
                  formattedDate={formattedDate}
                  hours={hours}
                  minutes={minutes}
                  status={movie.status}
                />
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="mx-auto container d-flex justify-content-center align-items-center" id='trailer'>
              {trailerVideoId ? (
                <YouTube
                  videoId={trailerVideoId}
                  opts={{ width: screenWidth > 500 ? 700 : 400 }}
                />
              ) : (
                <p className='text-center'>No trailer found.</p>
              )}
            </div>
          )}

          <div>{/* <YoutubeSlider images={movie.videos.results} /> */}</div>
          <CastComp id={id} />
          <SimilarMovies genres={movie.genres} id={id} />
          <Recommendations id={id} />
        </div>
      )}
    </>
  );
}

export default MovieDetail


export const voteAverageCalcDetails = (vote: number) => {
  if (vote <= 4) {
    return <span className={"rating-details red"}>{vote.toFixed(1)}</span>;
  } else if (vote > 4 && vote <= 7) {
    return <span className={"rating-details orange"}>{vote.toFixed(1)}</span>;
  } else if (vote > 7) {
    return <span className={"rating-details green"}>{vote.toFixed(1)}</span>;
  }
};