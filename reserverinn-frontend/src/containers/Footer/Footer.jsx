import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineMailLock } from 'react-icons/md';
import { images } from '../../constants';
import './Footer.scss';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5ffrk7i', 'template_srfp28g', form.current, 'ebSiQgV_A4nv5pegs');

    e.target.reset();
  };
  return (
    <div id="contacts" className="app__footer">
      <h1 className="app__footer-title">
        Let&apos;s
        {' '}
        <span className="blinking-words">get in</span>
        {' '}
        touch
      </h1>
      <div className="app__footer-info">
        <div className="info-contact-details">
          <div className="info-contacts">
            <a href="mailto:mussocollins@gmail.com" className="p-text" target="_blank" rel="noreferrer">
              <MdOutlineMailLock className="media-icons" />
              <p>reserveinn@hotels.com</p>
            </a>

            <a href="https://api.whatsapp.com/send?phone+254717684174" className="p-text" target="_blank" rel="noreferrer">
              <BsWhatsapp className="media-icons" />
              <p>+254717684174</p>
            </a>
          </div>
          <div className="app__footer-image">
            <img src={images.shakes} alt="shakes" />
          </div>
        </div>

        <div className="app__footer-cards">
          <form className="app__footer-form" ref={form} onSubmit={sendEmail}>
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="name"
                required
              />
            </div>

            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
                required
              />
            </div>

            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                name="message"
                required
              />
            </div>

            <button
              className="p-text"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="footer__copyright">
        <p>© 2024 All Rights Reserved • Reserve Inn Hotels</p>
      </div>
    </div>
  );
};

export default Footer;
