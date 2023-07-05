import React from 'react'
import "../Styles/experience.css"

function Experience() {
  return (
    <div className='experience'>
    <div className='skills'>
      <h1>Skills</h1>
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
      <h1>College</h1>
      <li className='item'>
       <h2>Western Governors University </h2>
       <span>
Bachelor of Science - BS, Software Development Jul 2022 - Oct 2023
</span>
      </li>
    </ol>
     </div>
  </div>
  )
}

export default Experience