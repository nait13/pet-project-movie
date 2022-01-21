import { Chip } from '@mui/material'
import React, { useEffect } from 'react'
import apiConfig from '../../api/apiConfig'
import { createTheme ,ThemeProvider } from '@mui/material';
import { useDispatch , useSelector} from 'react-redux';
import { addSelectedGenres , deletSelectedGenres} from '../../redux/movieActions';
import './Genres.scss'

    
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


function Genres({ setGenres, genres, type, selectedGenres, setPage}) {

    const setSelectedGenress = useSelector(({movieReducer:{selectedGenres}}) => selectedGenres);
    const dispatch = useDispatch()


// !!!!!!!!!!!!!!
    const handleAddGenres = (genre) => {
        dispatch(addSelectedGenres(genre))
        setGenres(genres.filter((item) => item.id !== genre.id))
    }

    const handleRemove = (genre) => {
        dispatch(deletSelectedGenres(genre))
        setGenres([...genres,genre])

        // setSelectedGenres(
        //   selectedGenres.filter((selected) => selected.id !== genre.id)
        // );
        // setGenres([...genres, genre]);
        // setPage(1);
      };

      

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${apiConfig.apiKey}&language=en-US`)
            .then((respons) => respons.json())
            .then(({ genres }) => setGenres(genres))
            .catch((err) => console.log(err))
        return () => {
            setGenres({})
        }
    }, [type])

    console.log(setSelectedGenress)
    return (
        <div className='genres-wrapper' style={{ padding: "6px 0" }}>
            <ThemeProvider theme={darkTheme}>
                {genres?.map((genre) => (
                    <Chip
                        style={{ margin: 2 }}
                        label={genre.name}
                        key={genre.id}
                        clickable
                        size="small"
                        onClick={() => handleAddGenres(genre)}
                    />
                ))}
                {setSelectedGenress?.map((genre) => (
                    <Chip
                        style={{ margin: 2 }}
                        label={genre.name}
                        key={genre.id}
                        color="primary"
                        clickable
                        size="small"
                        onDelete={() => handleRemove(genre)}
                    />
                ))}
            </ThemeProvider>
        </div>
    );
};


export default Genres
