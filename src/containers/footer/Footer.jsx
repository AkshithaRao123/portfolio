import React from 'react';
import './footer.css';
import {email, github, instagram, linkedin} from './imports';

const Footer = () => {
  return (
    <div className='pf__footer'>
        <div><a href="mailto:akshashw@gmail.com"><img src={email} alt="Email" /></a></div>
        <div><a href='https://github.com/AkshithaRao123'><img src={github} alt="GitHub" /></a></div>
        <div><a href='https://www.linkedin.com/in/akshitha-rao-69365b22a/'><img src={linkedin} alt="LinkedIn" /></a></div>
        <div><a href='https://www.instagram.com/akshithasraopics/'><img src={instagram} alt="Instagram" /></a></div>
    </div>
  )
}

export default Footer
