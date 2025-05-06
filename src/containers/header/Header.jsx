import React from 'react';
import './header.css';
import self from '../../assets/self.jpg'

const Header = () => {
  return (
      <div className='pf__header section__padding' id="home">
        <div className='pf__header-content'>
          <h1 className="gradient__text">Hey there! I am Akshitha.</h1>
          <p>I am a computer science student passionate about bringing real positive changes through my work.</p>
          {/* <div className='pf__header-content_input'>
            <input type="email" placeholder='Your email address' />
            
            <button type="button">Get Started</button>
          </div> */}
        </div>
        <div className='pf__header-image'>
            <img src={self} alt="akshitha's photo" />
        </div>
      </div>
  )
}

export default Header
