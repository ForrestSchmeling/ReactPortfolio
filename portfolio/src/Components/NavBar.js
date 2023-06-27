import React from 'react';
import {Link} from "react-router-dom";
import "../Styles/navBar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function NavBar() {
    const [expandNavBar, setExpandNavBar] = useState(false);
  return (
    <div className='navBar'>
        <div className='hamburgerButton'>
    <button onClick={()=> {setExpandNavBar((prev) => !prev)}}><ReorderIcon /> </button>
        </div>
        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/Projects"> Projects </Link>
            <Link to="/Experience"> Experinece </Link>
        </div>
    </div>
  )
}

export default NavBar