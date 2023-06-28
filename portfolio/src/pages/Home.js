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
      <div className='skills'>
        <h1>Skills:</h1>
        <ol className='list'>
          <li className='item'> 
          <h2>Front-End</h2>
          <span>HTML,CSS, JavaScript, ReactJS, Bootstrap</span>
          </li>
          <li className='item'> 
          <h2>Back-End</h2>
          <span>SQL, .Net, Java, C++, Python, Ruby, C#</span>
          </li>
          <li className='item'> 
          <h2>Technical Skills</h2>
          <span>SDLC, Scrum, Agile, Waterfall, Object-Oriented Programming, Mobile Applications, Data Structures & Algorithms.</span>
          </li>
          <li className='item'> 
          <h2>Certifications</h2>
          <span>CompTIA A+ Certified, CompTIA Project+ Certified, and ITIL 4 Foundations Certified.</span>
          </li>
        </ol>
         </div>
    </div>
  )
}

export default Home