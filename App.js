import React from "react";
// import { Overlay, ThemeProvider } from "react-native-elements";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Forum from "./components/forum";
import Home from './components/homePage'

export default class App extends React.Component {
  render() {
    return (
        <Home />
    );
  }
}
