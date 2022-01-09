import React, { useEffect, useState } from 'react'
import apiConfig from '../../api/apiConfig'
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import MovieCard from '../../components/MovieCard/MovieCard';
import './Trending.scss'


function Trending() {
    const [page, setPage] = useState(1)
    const [dataTrending, setDataTrending] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiConfig.apiKey}&page=${page}`)
            .then((res) => res.json())
            .then(({ results }) => setDataTrending(results));
    }, [page])
    console.log(dataTrending);


    const handlPageChange = (e) => {
        setPage(e.target.textContent)
    }


    return (
        <div >
            <h2 className='title-page'>Trending</h2>
            <div className='trending'>
                {dataTrending ? dataTrending.map((item) => <MovieCard key={item.id}{...item} />) : 'Loding...'}
            </div>
            <CustomPagination handlPageChange = {handlPageChange} />
        </div>

    )
}

export default Trending
