import React from 'react'
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <div className='navBar'>
        <div className='hamburgerButton'>
    <button> </button>
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