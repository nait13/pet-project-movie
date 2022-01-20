import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import apiConfig from '../../api/apiConfig'
import CastList from './detail-utils/CastList/CastList'
import VideoList from './detail-utils/VideoList/VideoList'
import preloder from '../../assets/img/preloder.gif'
import setColor from '../../utils/setColor'
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


    return (
        <>
            {item && (
                <>
                    <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImag(item.backdrop_path || item.poster_path)})`}}>
                        <div className='movie-content-wrapper'>
                            <div className='movie-content-poster' >
                                <img src={apiConfig.originalImag(item.poster_path)}/>
                            </div>
                            <div className='movie-content-info'>
                                <h1 className='title'>{item.title || item.original_name }</h1>
                                <div className='tagline'>{item.tagline}</div>
                                <div className='details-vote' style={{borderColor:`${setColor(item.vote_average)}`}}>{item.vote_average}</div>
                                {/* <div className='detailt-button-add-kab'><button>AD to my watch list</button></div> */}
                                <p>{item.overview}</p>
                                <div className="genres">
                                   <div className='genres-title'>
                                       Genres:
                                   </div>
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre) => (
                                            <div key={genre.id} className="genres-item">{genre.name}</div>
                                        ))
                                    }
                                </div>
                                {/* <div className='additional-info'>
                                    <div>{item.release_date}</div>
                                    <div>{item.runtime}  min</div>
                                </div> */}
                            </div>
                        </div>                        
                    </div>
                    <div className='cast'>
                        <div className='cast-title'>
                            <h2>ACTORS</h2>
                        </div>
                        <CastList id = {item.id}/>
                    </div>
                    <div className='container'>
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
