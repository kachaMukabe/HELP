import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Forum from "./components/forum";
import Home from './components/homePage';
import Number from './components/yourNumber';

export default class App extends React.Component {
  render() {
    return (
      <Number />
      // <Home />
    );
  }
}
