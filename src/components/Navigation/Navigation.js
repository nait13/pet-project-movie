import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TagIcon from '@mui/icons-material/Tag';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();


  React.useEffect(()=>{
    if(value === 0) navigate('/');
    else if(value === 1) navigate('/movies')
    else if(value === 2) navigate('/series')
  },[value])

  return (
    <Box sx={{ width: 500 , position: 'fixed', bottom: 0 , zIndex:100,width:'100%'}}>
      <BottomNavigation
        showLabels
        sx ={{backgroundColor: "#2d313a",}}
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue)
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{color:'white'}} label="Trending" icon={<TagIcon />} />
        <BottomNavigationAction style={{color:'white'}} label="Movies" icon={<LocalMoviesIcon />} />
        <BottomNavigationAction style={{color:'white'}} label= {`TV Serias`} icon={<LiveTvIcon />} />
      </BottomNavigation>
    </Box>
  );
}