import React from 'react'
import Pagination from '@mui/material/Pagination';
import './CustomPagination.scss'
import { createTheme ,ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
    palette:{
        type:'dark',
    },
});

const CustomPagination = ({handlPageChange, numberOfPages = 10}) => {
    return (
        <div className='pagination'>
            <ThemeProvider theme={darkTheme}>
                <Pagination 
                    onChange={handlPageChange} 
                    count={numberOfPages} 
                    color="primary"
                    hideNextButton
                    hidePrevButton
                    sx={{color:'white'}} />  
            </ThemeProvider>      
        </div>
        )
    
}

export default CustomPagination;
