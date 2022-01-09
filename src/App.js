import { Container } from '@mui/material';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import SimpleBottomNavigation from './components/Navigation/Navigation';
import './index.scss'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import Detail from './components/Detail/Detail';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className="app">
            <Routes>
              <Route path = '/' element = {<Home/>}/>
              <Route path = '/movies' element = {<Movies/>}/>
              <Route path = '/series' element = {<Series/>} />
              <Route path = '/:category/:id' element = {<Detail/>}/>
            </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
