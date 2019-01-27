import React from "react";

import './Navigation.css';

const Navigation = props => (
  <header className="Navigation">
    <nav className="Navigation-nav">
      <div></div>
      <div className="Navigation-logo"><a href="/">LOGO HERE</a></div>
      <div className="Navigation-list">
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Skills</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Experiences</a></li>
          <li><a href="">Contacts</a></li>
          <li><a href="">Extras</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navigation;
