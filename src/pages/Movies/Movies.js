import React, { useState , useEffect ,useRef} from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import apiConfig from '../../api/apiConfig'
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import Genres from '../../components/Genres/Genres'
import './Movies.scss'

export default function Movies() {
    const [page, setPage] = useState(1);
    const [dataMovie, setDataMovie] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState(500);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState();
    const ref = useRef(dataMovie);
    // useEffect(()=>{
    //     fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiConfig.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)
    //     .then((respons)=>respons.json())
    //     .then(({results})=>setDataMovie(results));
    // },[page])
    
  useEffect(() => {
    let cleanupFunction = false;
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiConfig.apiKey}&language=ru&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)
        const result = await response.json();

        setNumberOfPages(result.total_pages)
        // console.log(result, 'result')
        console.log('REF',dataMovie)

        // непосредственное обновление состояния при условии, что компонент не размонтирован
        if(!cleanupFunction) setDataMovie([...dataMovie,...result.results]);
      } catch (e) {
        console.error(e.message)
      }
    };
    fetchData();
    // функция очистки useEffect
    return () => cleanupFunction = true;
  }, [page]);
    


  const handlPageChange = (e) => {
    console.log(e.target.textContent)
    setPage(e.target.textContent)
    // window.scroll(0,0);
}

  // console.log("DATAMOVIE",dataMovie)
    return (
        <div className='movie-page'>
            <h2 className='title-page'>Movies</h2>
            <Genres 
              type = 'movie' 
              selectedGenres = {selectedGenres}
              genres = {genres}
              setGenres = {setGenres} 
              setPage = {setPage}
              setSelectedGenres = {setSelectedGenres}/>
            <div className='movie-conteiner-item'>
                {dataMovie ? dataMovie.map((item) => <MovieCard key={item.id} {...item} mediaType = 'movie'  />) : 'Loding...'}
            </div>
            <CustomPagination handlPageChange={handlPageChange} numberOfPages={500}/>
        </div>
    )
}
