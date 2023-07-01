import React from 'react'
import "../Styles/home.css";
import me from "../pages/me.jpeg";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>My Name Is Forrest Schmeling</h2>
        <div className='picture'><img src={me} alt="white man with a black button up"width="250" height="200"></img></div>

        <div className='prompt'> <p> A Software Developer with a passion for learning and creating code. </p></div>
      </div>
    </div>
  )
}

export default Home