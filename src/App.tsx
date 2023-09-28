import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Movies from "./components/movies/Movies";
import Tv from "./components/tv/Tv";
import Search from "./components/search/Search";
import MovieDetail from "./components/movie-details/MovieDetails";
import TvDetails from "./components/tv-details/TvDetails";




function App() {
  return (
    <div className="dark">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/movie/:id" element={<MovieDetail/>}/>
      <Route path="/tv/:id" element={<TvDetails/>}/>
      <Route path="/tv" element={<Tv/>}/>
      <Route path="/search/:kind/:search" element={<Search/>}/>
      </Routes>
    </div>
  );
}


export default App;

