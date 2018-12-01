import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ForumListItem from "./forum_list_item";

export default class Forum extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View
          style={
            {
              // flex: 1,
            }
          }
        >
          <Text
            style={{
              marginTop: 40,
              color: "#2699fb",
              width: "100%",
              fontSize: 20,
              height: 50,
              textAlign: "center",
              textAlignVertical: "center",
              elevation: 1
            }}
          >
            FORUM
          </Text>
        </View>
        <ForumListItem />
        <ForumListItem />
        <ForumListItem />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
