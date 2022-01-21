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

export function addSelectedGenres (obj) {
    return {
        type:movieActionTypes.ADD_SELECTED_GENRES,
        payload:obj
    }
}

export function deletSelectedGenres (obj) {
    return {
        type:movieActionTypes.DELETE_SELECTED_GENRES,
        payload:{
            deleteId: obj.id 
        }
    }
}