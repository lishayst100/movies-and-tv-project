
import { useEffect, useState } from 'react'


const useFetch = (url:string ) => {
    const [data, setData] = useState([])
    
    useEffect(()=>{
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setData(json.results)
            })

    },[url])
   
    return data
    
}

export default useFetch