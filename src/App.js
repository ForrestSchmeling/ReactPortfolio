import './App.css';
import React from 'react'
import {BrowserRouter as HashRouter, Routes, Route, } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import NavBar from './Components/NavBar';
import "./Styles/app.css";
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <HashRouter>
       <NavBar />

        <Routes>
          <Route path = "/" element ={<Home />} />
          <Route path = "/projects" element ={<Projects />} />
          <Route path = "/experience" element ={<Experience />} />
        </Routes>

        <Footer />
        </HashRouter>
    </div>
  );
}

export default App;
