
import { TvShow } from '../types/types'
import useFetch from './useFetch'


const useTv = () => {
    const url = 'https://api.themoviedb.org/3/discover/tv?api_key=b3b1492d3e91e9f9403a2989f3031b0c'
    const fetchTv = useFetch(url)

    const tv = fetchTv as TvShow[]

    return tv
}

export default useTv