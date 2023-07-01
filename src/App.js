import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import NavBar from './Components/NavBar';
import "./Styles/app.css";
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Router>
       <NavBar />

        <Routes>
          <Route path = "/" element ={<Home />} />
          <Route path = "/projects" element ={<Projects />} />
          <Route path = "/experience" element ={<Experience />} />
          <Route path='/ReactPortfolio' exact component={<Home />}/>
        </Routes>

        <Footer />
        </Router>
    </div>
  );
}

export default App;
