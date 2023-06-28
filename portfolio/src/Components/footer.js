import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GittHubIcon from "@material-ui/icons/GitHub";
import ContactMailIcon from '@material-ui/icons/ContactMail';
import "../Styles/footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
       <a target="_blank" rel="noopener noreferrer" href = "https://www.linkedin.com/in/forrest-s-857709a3/"> <LinkedInIcon /> </a>
       <a target="_blank" rel="noopener noreferrer" href = "https://github.com/ForrestSchmeling"> <GittHubIcon /> </a>
       <a target="_blank" rel="noopener noreferrer" href = "mailto:forrestschmeling@icloud.com?subject=Job%20Inquiry"> <ContactMailIcon/> </a>
      </div>
      <p>&copy; 2023 Forrest Schmeling</p>
    </div>
  );
}

export default Footer