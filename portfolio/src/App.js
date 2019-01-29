import React from "react";

import Navigation from "./Modules/Navigation/Navigation";
import DrawerNav from "./Modules/Drawer/DrawerNav";
//import "insert object" from "./Modules/insert object";

class App extends React.Component {

  state = {
    DrawerNavOpen: false
  };

  DrawerNavClickHandler = () => {
    this.setState((prevState) => {
      return {DrawerNavOpen: !prevState.DrawerNavOpen};
    });
  };

  render() {
    let drawerNav;

    if (this.state.DrawerNavOpen) {

    }

    return (
      <div style={{height: '100%'}}>
        <Navigation DrawerNavClickHandler={this.DrawerNavClickHandler}/>
        <DrawerNav show={this.state.DrawerNavOpen}/>
      </div>
    );
  }
};

export default App;
