import { dataMovieSuccess , searchMovieFetchDataSuccess } from "../movieActions";

export function getDataMovie(url){
    return ( dispatch ) => {
        fetch(url)
            .then((respons)=>{
                if(!respons.ok){
                    throw new Error(respons.statusText)
                }
                return respons;
            })
            .then((respons)=>respons.json())
            .then((data) => dispatch(dataMovieSuccess(data)))
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
