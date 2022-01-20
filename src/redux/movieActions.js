import { movieActionTypes } from "./movieActionTypes"


export function searchMovieFetchDataSuccess(movie){
    return {
        type:movieActionTypes.SEARCH_SUCCESS,
        payload: {
            dataMovie:movie,
        }
    }
}



export function dataMovieSuccess(data){
    return {
        type:movieActionTypes.MOVIE_SUCCESS,
        payload: {
            dataMovie:data
        }
    }
}
