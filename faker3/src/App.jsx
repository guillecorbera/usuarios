// import Home from './components/Home'

import './App.css'

import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Default from './pages/Default';
import Search from './pages/Search';
import Inicio from './pages/Inicio';
// import Modales from './pages/Modales';


export default function App() {



return (
   <div className='app'>
      <p>Bienvenidos a Faker 3 (31/08/2023)</p>

         {/* <Home /> */}
      {/* rutas */}
      <Routes>
        <Route path='/' element={<Layout/>}>
          {/* <>
            <Route path='Modales' element={<Modales/>} />
          </> */}
          <Route path='inicio' element={<Inicio/>} />
          <Route path='home' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path='search' element={<Search/>} />
          <Route path='*' element={<Default/>} />

        </Route>
      </Routes>


   </div>
   )
}

