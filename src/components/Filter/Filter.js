import React ,{useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { createTheme ,ThemeProvider } from '@mui/material';
import apiConfig from '../../api/apiConfig';
import './Filter.scss'


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });



function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export default function MultipleSelectChip(props) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [xz ,setXz] = React.useState([]);

    const val = [];

  for(let i = 0;i<personName.length;i++) {
    
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/${props.type}/list?api_key=${apiConfig.apiKey}&language=en-US`)
        .then((respons) => respons.json())
        .then(({ genres }) => props.setGenres(genres))
    return () => {
        props.setGenres({})
    }
    }, [])

    const handleChange = ({target:{value}}) => {
    // const fi = props.genres?.find((item)=> item.name === value)
    // console.log(fi)
    // props.genres.find((item)=> )
    console.log('VAALUEE',value)
    // console.log(props.genres)

    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  console.log(personName)
  return (
    <div className='filter-wrapper'>
        <ThemeProvider theme={darkTheme}>
            <FormControl sx={{ m: 1, width: 200 }}>
                <InputLabel id="demo-multiple-chip-label">Genres</InputLabel>
                <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Genres" />}
                // renderValue={(selected) => (
                //     <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                //     {selected.map((value) => (
                //         <Chip key={value} label={value} />
                //     ))}
                //     </Box>
                // )}
                MenuProps={MenuProps}
                >
                {props.genres.map((item) => (
                    <MenuItem
                    key={item.id}
                    value={item.name}
                    style={getStyles(item.name, personName, theme)}
                    >
                    {item.name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
        </ThemeProvider>
    </div>
  );
}