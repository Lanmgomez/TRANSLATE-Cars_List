import {BrowserRouter, Routes, Route} from 'react-router-dom'
// Sass
import './Global_Sass_Config/App.sass';
// Pages
import Home from './pages/Home_page/Home';
import AboutUs from './pages/About_Us/AboutUs';
import CarsInfos from './pages/Cars_Infos/CarsInfos';
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Search from './pages/Search_page/Search';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/aboutus' element={<AboutUs/>} />
              <Route path='/carsInfos/:id' element={<CarsInfos />}/>
              <Route path='/search' element={<Search />}/>
            </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
