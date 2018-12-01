import React from "react";
import { Overlay, ThemeProvider } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import Forum from "./components/forum";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Forum />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
