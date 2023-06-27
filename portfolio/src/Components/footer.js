import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GittHubIcon from "@material-ui/icons/GitHub";
import ContactMailIcon from '@material-ui/icons/ContactMail';
import "../Styles/footer.css";

function footer() {
  return (
    <div className='footer'>
      <div>
        <LinkedInIcon />
        <GittHubIcon />
        <ContactMailIcon/>
      </div>
      <p>&copy; 2023 Forrest Schmeling</p>
    </div>
  )
}

export default footer