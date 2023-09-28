import React, { useEffect, useState } from 'react'
import { ColorRing } from 'react-loader-spinner';
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube';
import { BASE_URL, API_KEY, formatDate } from '../../services/API';
import OverlayImg from '../header/OverlayImg';
import GenreDetails from '../movie-details/GenreDetails';
import MoreDetails from '../movie-details/MoreDetails';
import Overview from '../movie-details/Overview';
import PosterImg from '../movie-details/PosterImg';
import RatingTrailer from '../movie-details/RatingTrailer';
import { TvShowDetailsProps } from '../../types/types';
import SlidersTv from './SlidersTv';

const TvDetails = () => {
    const {id} = useParams()
   const [movie, setMovie] = useState<TvShowDetailsProps>();
   const [isOpen, setIsOpen] = useState(false);
   const url = `${BASE_URL}/tv/${id}?${API_KEY}&append_to_response=videos`;
   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

   useEffect(() => {
     fetch(url)
       .then((res) => res.json())
       .then((result) => setMovie(result));
   }, [id, url]);

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

   const formattedDate: string = formatDate(movie.first_air_date);
   const bgcImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;

   const hours = Math.floor(movie.runtime / 60);
   const minutes = movie.runtime % 60;
   
   const handleIsOpen = () => {
     setIsOpen(!isOpen);
     console.log(isOpen);
   };

   const findTrailer = () => {
     if (!movie || !movie.videos || !movie.videos.results) {
       return null; // Handle the case where movie or videos are undefined
     }

     const trailer = movie.videos.results.find(
       (v) => v.name === "Official Trailer"
     );

     if (!trailer) {
       const searchWord = "Trailer";
       const filteredVideos = movie.videos.results.filter((v) =>
         v.name.includes(searchWord)
       );
       return filteredVideos.length > 0 ? filteredVideos[0] : null;
     }

     return trailer;
   };

   

   const trailerFinder = findTrailer();
   const trailerVideoId = trailerFinder ? trailerFinder.key : null;

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
                   title={movie.name}
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
             <div
               className="mx-auto container d-flex justify-content-center align-items-center"
               id="trailer"
             >
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

           <SlidersTv filter={"similar"} title="Similar Shows" id={movie.id} />
           <SlidersTv
             filter={"recommendations"}
             title="Recommended Shows"
             id={movie.id}
           />
         </div>
       )}
     </>
   );
}

export default TvDetails