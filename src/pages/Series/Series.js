import React, { useState , useEffect} from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import apiConfig from '../../api/apiConfig'
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import Genres from '../../components/Genres/Genres'
import useGenre from '../../components/hooks/useGenre.js'
import './Series.scss'



export default function Series() {
    const [page, setPage] = useState(1);
    const [dataTv, setDataTv] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState(1);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforUrl = useGenre(selectedGenres)

    console.log(genreforUrl)
    
  useEffect(() => {
    let cleanupFunction = false;
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiConfig.apiKey}&language=en-US&page=${page}&with_genres=${genreforUrl}`)
        const result = await response.json();

        setNumberOfPages(result.total_pages)
        console.log(result, 'result')

        // непосредственное обновление состояния при условии, что компонент не размонтирован
        if(!cleanupFunction) setDataTv(result.results);
      } catch (e) {
        console.error(e.message)
      }
    };
    fetchData();
    // функция очистки useEffect
    return () => cleanupFunction = true;
  }, [page , genreforUrl]);
    

  const handlPageChange = (e) => {
    console.log(e.target.textContent)
    setPage(e.target.textContent)
    window.scroll(0,0);
}
  console.log('Genres',genres)
  console.log(selectedGenres)
    return (
        <div className='movie-page'>
            <h2 className='title-page'>Series</h2>
            <Genres 
              type = 'tv' 
              selectedGenres = {selectedGenres}
              genres = {genres}
              setGenres = {setGenres} 
              setPage = {setPage}
              setSelectedGenres = {setSelectedGenres}/>
            <div className='movie-conteiner-item'>
                {dataTv ? dataTv.map((item) => <MovieCard key={item.id} {...item} mediaType = 'tv'  />) : 'Loding...'}
            </div>
            <CustomPagination  handlPageChange={handlPageChange} numberOfPages={numberOfPages}/>
        </div>
    )
}
