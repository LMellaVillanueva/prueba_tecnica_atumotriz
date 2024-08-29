import './App.css'
import { Routes, Route } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Catalogo from './components/catalogo/Catalogo';
import Contacto from './components/contacto/Contacto';
import NavBar from './components/navBar/NavBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { getCars } from './redux/carSlice';
import Footer from './components/footer/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCars = async () => {
      const { data } = await axios.get("https://freetestapi.com/api/v1/cars");
      dispatch(getCars(data));
    };
    fetchCars();
  }, []);

  return (
    <>
      <main>
        <NavBar/>

        <Routes>

          <Route path='/' element={<Landing/>}/>
          <Route path='/catalogo' element={<Catalogo/>}/>
          <Route path='/contact' element={<Contacto/>}/>

        </Routes>

        <Footer/>
      </main>
    </>
  )
}

export default App