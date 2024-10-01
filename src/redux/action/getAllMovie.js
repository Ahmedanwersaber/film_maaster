import axios from "axios";
import { ALLMOVIE, MovieApi } from "../type/MovieType"

  //get all moves by axios 
export const getAllMovie=()=>{

    return async(dispatch)=>{
          const res=await axios.get(MovieApi)
          dispatch({type:ALLMOVIE,data:res.data.results,pages:res.data.total_pages})
    }

}

//search component 
export const getMovieSearch=(word)=>{

  return async(dispatch)=>{
        const res=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c4f4fc9310c86e731ec98effdcc4f63e&&query=${word}&language=ar`)
        dispatch({type:ALLMOVIE,data:res.data.results,pages:res.data.total_pages})
  }

}


export const getMoviePage=(page)=>{

  return async(dispatch)=>{
        const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c4f4fc9310c86e731ec98effdcc4f63e&language=ar-US&page=${page}`)
        dispatch({type:ALLMOVIE,data:res.data.results,pages:res.data.total_pages})
  }

}
