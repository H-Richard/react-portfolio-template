import React from "react";

import './DrawerButton.css';

const DrawerButton = props => (
  <button className="drawerButton" onClick={props.click}>
    <div className="button-line"></div>
    <div className="button-line"></div>
    <div className="button-line"></div>
  </button>
);


export default DrawerButton;
