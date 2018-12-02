import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Forum from "./components/forum";
import Home from './components/homePage';
import Number from './components/yourNumber';
import ListItem from "./components/forum_list_item";
import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class App extends React.Component {

  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }
    return (
      <RootStack />
      // <Home />
    );
  }
}

const RootStack = createAppContainer(createStackNavigator({
  Home: Number,
  Panic: Home
},{
  initialRouteName: 'Home'
}));
