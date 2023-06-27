import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import NavBar from './Components/NavBar';
import "./Styles/app.css";

function App() {
  return (
    <div className="App">
       <NavBar />
        <Routes>
          <Route path = "/" element ={<Home />} />
          <Route path = "/projects" element ={<Projects />} />
          <Route path = "/experience" element ={<Experience />} />
        </Routes>
       
    </div>
  );
}

export default App;
