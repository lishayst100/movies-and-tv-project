import React from "react";


export type Cast = {
  id: number;
  name: string;
  profile_path: string;
  character: string;
  known_for_department:string;
};

export type Movie = {
    title: string;
    overview: string;
    id: number;
    backdrop_path: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    genre_ids?: number[];
    popularity: number;
};


export type TvShow = {
  name: string;
  overview: string;
  id: number;
  backdrop_path: string;
  poster_path: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genre_ids?: number[];
};


export type TvMovie = TvShow | Movie

export type MovieFront = {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
};

export type Genre = {
    name: string;
    id: number;
};

type VideosType = {
    key:string;
    name:string;
    site:string;
}


export type TvShowDetailsProps = {
  budget: number;
  genres: Genre[];
  homepage: string;
  runtime: number;
  tagline: string;
  status: string;
  videos: {
    results: [
      {
        name: string;
        key: string;
      }
    ];
  };
} & TvShow;

export type MovieDetails = {
  budget: number;
  genres: Genre[];
  homepage: string;
  runtime: number;
  tagline: string;
  status: string;
  videos: {
    results: [
      {
        name: string;
        key: string;
      }
    ];
  };
} & Movie;

export type MovieProps = {} & Movie;

export type MovieListProps = {
    movies: Movie[];
};

//.....................................................

export type OriginCountry = {
    countries: string
}



export type TvShowProps = {

} & TvShow

export type TvShowListProps = {
    TVList: TvShow[]
}

export type TvShowDetailsProps ={
    number_of_episodes: number;
    overview: string
    

}

//....................................................................

//type alias
export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;


export type DarkModeContextType = {
    darkmode: boolean;
    toggleDarkMode: () => void
}

export type ChildProps = {
    children: React.ReactNode;
}

export type IconType = (props: IconTypeProps) => JSX.Element;

export interface Icon {
  icon: IconType;
}