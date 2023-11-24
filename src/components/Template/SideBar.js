import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Anhar Risnumawan</h2>
        <p><a href="mailto:anhar@pens.ac.id">anhar@pens.ac.id</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        As a lecturer in the Mechatronics Engineering Division
        at Politeknik Elektronika Negeri Surabaya, Indonesia,
        my expertise lies in the dynamic fields of computer vision
        and robotics. My academic and professional journey
        is marked by a deep commitment to both education and innovative research,
        with a special focus on practical applications in computer vision
        and robotic technologies. Beyond the classroom,
        I am passionate about fostering collaborations between academia and industry,
        aiming to bridge the gap and create synergies that advance technological frontiers.
        I am always open to exploring new opportunities and
        partnerships that leverage my expertise for real-world industrial applications.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about') ? <Link to="/about" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Anhar Risnumawan.</p>
    </section>
  </section>
);

export default SideBar;
