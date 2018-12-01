import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Forum extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            padding: 20,
            marginTop: 50,
            backgroundColor: "blue",
            color: "white",
            flexDirection: "row",
            width: "100%"
          }}
        >
          FORUM
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
