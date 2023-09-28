
import { Movie } from '../types/types'
import useFetch from './useFetch'

const useMovie = () => {
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=b3b1492d3e91e9f9403a2989f3031b0c"
    const fetchMovies = useFetch(url)

    const movies = fetchMovies as Movie[]
    return movies

}

export default useMovie