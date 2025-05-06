import React, {useState} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';

const Menu = () => (
  <>
  <p>
    <a href="#home">Home</a>
  </p>
  {/* <p>
    <a href="#about">About</a>
  </p> */}
  <p>
    <a href='#education'>Education</a>
  </p>
  <p>
    <a href='#experience'>Experience</a>
  </p>
  <p>
    <a href="https://github.com/AkshithaRao123">Projects</a>
  </p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='pf__navbar'>
      <div className='pf__navbar_links'>
        <div className='pf__navbar_links_logo'>
          <img src={logo} alt='logo' width='30' height='30' />
        </div>
        <div className='pf__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='pf__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='pf__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="$fff" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="$fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='pf__navbar-menu_container scale-up-center'>
            <div className='pf__navbar-menu_container-links'>
              <Menu />
              <div className='pf__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
