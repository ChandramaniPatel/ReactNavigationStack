import { Text } from 'react-native';
import React, { Component } from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Login from "./src/Login"
import About from "./src/About"
import Home from "./src/Home"

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="Login" component={Login}
      hideNavBar={false}
      title = "Login"
    />
     <Scene key="About" component={About}
      hideNavBar={false}
      title = "About"
    />
     <Scene key="Home" component={Home}
      hideNavBar={false}
      title = "Home"
      initial
    />
  </Scene>
);

export default class App extends Component {
  constructor() {
    super();
   }
  render() {
    return (
      <Router
        scenes={scenes}
      />
    );
  }
}