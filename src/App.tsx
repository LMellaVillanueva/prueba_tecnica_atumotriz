import './App.css'
import { Routes, Route } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Catalogo from './components/catalogo/Catalogo';
import Contacto from './components/contacto/Contacto';
import NavBar from './components/navBar/NavBar';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getCars } from './redux/carSlice';
import Footer from './components/footer/Footer';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function App() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      const { data } = await axios.get("https://freetestapi.com/api/v1/cars");
      dispatch(getCars(data));
    };
    fetchCars();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <main>
        <NavBar/>

        <Routes>

          <Route path='/' element={<Landing/>}/>
          <Route path='/catalogo' element={<Catalogo/>}/>
          <Route path='/contact' element={<Contacto/>}/>

        </Routes>

        <button className={`transform scale-0 rounded-full bg-black w-14 h-14 fixed bottom-5 right-5 md:bottom-10 md:right-10 transition text-white text-2xl duration-300 ${show && 'scale-100'}`} onClick={scrollUp}><ArrowUpwardIcon fontSize='small'/></button>

        <Footer/>
      </main>
    </>
  )
}

export default App