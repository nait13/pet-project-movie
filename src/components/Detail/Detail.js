import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import apiConfig from '../../api/apiConfig'
import './Details.scss'



const Detail = () => {
    const [item , setItem] = useState(null)
    const { category , id} = useParams();

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/${category}/${id}?api_key=${apiConfig.apiKey}&language=en-US`)
        .then((respons)=> respons.json())
        .then((data)=>setItem(data))

        window.scroll(0,0)
    },[category , id])

    // useEffect(()=>{
    //     fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiConfig.apiKey}&language=en-US`)
    //     .then((respons)=> respons.json())
    //     .then((data)=>console.log(data))

    //     window.scroll(0,0)
    // },[])
    console.log(item);
    


    return (
        <>
            {item && (
                <>
                    <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImag(item.backdrop_path || item.poster_path)})`}}></div>
                    <div className='details-wrapper'>
                        <div className='movie-poster'>
                            <img src={apiConfig.w300Imag(item.poster_path)}/>
                        </div>
                        <div className='details-movie-info'>
                            <div>{item.title}</div>
                            <div>{item.vote_average}</div>
                            <div>{item.runtime}min</div>
                            <div>{item.overview}</div>
                        </div>
                        <div className="genres">
                            {
                                item.genres && item.genres.slice(0, 5).map((genre) => (
                                    <span key={genre.id} className="genres-item">{genre.name}</span>
                                ))
                            }
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Detail
