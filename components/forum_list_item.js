import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

export default class ForumListItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            marginTop: 10,
            elevation: 1
          }}
        >
          <Text
            style={{
              height: 50,
              backgroundColor: "#7fc4fd",
              textAlignVertical: "center",
              textAlign: "center",
              color: "white",
              fontSize: 18
            }}
          >
            Title
          </Text>
          {/* avatar and user name  */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              padding: 10
            }}
          >
            <Icon name="md-contact" type="ionicon" size={40} color="#7fc4fd" />
            <Text
              style={{
                color: "#7fc4fd",
                padding: 5,
                fontWeight: "bold"
              }}
            >
              Sharon kangwa
            </Text>

            <Text
              style={{
                color: "#7fc4fd",
                marginLeft: "40%"
              }}
            >
              1 min ago
            </Text>
          </View>
          {/* Description  */}
          <Text
            style={{
              height: 100,
              fontSize: 15,
              color: "#2699fb",
              padding: 10
            }}
          >
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s,
          </Text>

          <Text
            style={{
              height: 100,
              fontSize: 15,
              color: "#2699fb",
              padding: 10
            }}
          >
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s,
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //   container: {
  //     // flex: 1,
  //     // flexDirection: "row"
  //   }
});
