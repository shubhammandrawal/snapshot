import './App.css';
import Beaches from './components/Pages/Beaches';
import Birds from './components/Pages/Birds';
import Foods from './components/Pages/Food';
import Mountain from './components/Pages/Mountain';
import Search from './components/Search/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/mountains' element={<Mountain />} />
        <Route path='/beaches' element={<Beaches />} />
        <Route path='/birds' element={<Birds />} />
        <Route path='/foods' element={<Foods />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
