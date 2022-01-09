import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import apiConfig from '../../api/apiConfig'



const Detail = () => {
    const [item , setItem] = useState(null)
    const { category , id} = useParams();

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/${category}/${id}?api_key=${apiConfig.apiKey}&language=en-US`)
        .then((respons)=> respons.json())
        .then((data)=>setItem(data))

        window.scroll(0,0)
    },[category , id])

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiConfig.apiKey}&language=en-US`)
        .then((respons)=> respons.json())
        .then((data)=>console.log(data))

        window.scroll(0,0)
    },[])
    


    return (
        <>
            {item && (
                <>
                    {/* <div className='banner' ><img src={apiConfig.originalImag(item.backdrop_path)}/></div>   */}
                    <div className='banner' ><img src={apiConfig.originalImag(item.poster_path)}/></div>
                    <div>{item.title}</div>
                    <div>{item.overview}</div>
                </>
            )}
        </>
    )
}

export default Detail
