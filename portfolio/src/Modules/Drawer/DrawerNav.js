import React from "react";

import './DrawerNav.css';

const DrawerNav = props => {
    let drawerClasses = 'DrawerNav';
    if (props.show) {
      drawerClasses = 'DrawerNav open'
    };
  return(
  <nav className={drawerClasses}>
    <ul>
      <li><a href="">About</a></li>
      <li><a href="">Skills</a></li>
      <li><a href="">Projects</a></li>
      <li><a href="">Experiences</a></li>
      <li><a href="">Contacts</a></li>
      <li><a href="">Extras</a></li>
    </ul>
  </nav>);
};

export default DrawerNav;
