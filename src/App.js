import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Project from './components/Project';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <Navigation/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Project' element={<Project/>}/>
      </Routes>
      </BrowserRouter>
     
     
    </>
  );
}

export default App;
