import { movieActionTypes } from "./movieActionTypes"


export function searchMovieFetchDataSuccess(movie){
    return {
        type:movieActionTypes.SEARCH_SUCCESS,
        payload: {
            dataMovie:movie,
        }
    }
}



export function searchMovieFetchData(url){
    return ( dispatch ) => {
        fetch(url)
            .then((respons)=>{
                if(!respons.ok){
                    throw new Error(respons.statusText)
                }
                return respons;
            })
            .then((respons)=>respons.json())
            .then(({results}) => dispatch(searchMovieFetchDataSuccess(results)))
    }
}