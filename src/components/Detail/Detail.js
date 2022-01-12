import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import apiConfig from '../../api/apiConfig'
import CastList from './detail-utils/CastList/CastList'
import VideoList from './detail-utils/VideoList/VideoList'
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
                    <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImag(item.backdrop_path || item.poster_path)})`}}>
                        <div className='movie-content-wrapper'>
                            <div className='movie-content-poster' >
                                {/* <div className='poster-img' style={{backgroundImage: `url(${apiConfig.originalImag(item.poster_path || item.backdrop_path)})`}}></div> */}
                                <img src={apiConfig.originalImag(item.poster_path)}/>
                            </div>
                            <div className='movie-content-info'>
                                <h1 className='title'>{item.title}</h1>
                                <div>{item.tagline}</div>
                                <div className='details-vote'>{item.vote_average}</div>
                                <div className='detailt-button-add-kab'><button>ADDDDDD</button></div>
                                <p>{item.overview}</p>
                                <div className="genres">
                                    Genres:
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre) => (
                                            <span key={genre.id} className="genres-item">{genre.name}</span>
                                        ))
                                    }
                                </div>
                                <div className='additional-info'>
                                    <div>{item.release_date}</div>
                                    <div>{item.runtime}min</div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div className='cast'>
                        <div>
                            <h2>Casts</h2>
                        </div>
                        <CastList id = {item.id}/>
                    </div>
                    <div>
                        <div>
                            <VideoList id = {item.id}/>
                        </div>
                    </div>
                   
                </>
            )}
        </>
    )
}

export default Detail
