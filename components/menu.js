import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class Menu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          // onPress={this.onPress}
        >
          <Text style={{color: 'white', fontSize: 24}}>Add Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={this.onPress}
        >
          <Text style={{color: 'white', fontSize: 24}}>Forum</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
