import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
// import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [fix, setFix] = useState(false);
  const [navActive, setNavActive] = useState(false);

  const navScroll = () => {
    if (window.scrollY >= 60) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener('scroll', navScroll);

  return (
    <div className="app__nav">
      <nav className={fix ? 'nav__container fixed' : 'nav__container'}>
        <div className="app__navbar-logo">
          <h2>Reserve Inn</h2>
          {/* <img src={images.logo} alt="App Logo" /> */}
        </div>

        <ul className="app__navbar-links">
          <li>
            <NavLink
              className="app__navbar-links-a"
              to="/"
              onClick={() => setNavActive(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="app__navbar-links-a"
              to="/abouts"
              onClick={() => setNavActive(false)}
            >
              About Us
            </NavLink>
          </li>
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              className="toggle-menu"
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul className="nav__links">
                <li>
                  <NavLink
                    className="nav-links-color"
                    to="/"
                    onClick={() => setToggle(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/abouts"
                    onClick={() => setToggle(false)}
                  >
                    About Us
                  </NavLink>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// **************************************************************
