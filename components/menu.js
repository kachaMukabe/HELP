import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class Menu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={{fontSize: 24}}> Add Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Forum')}
        >
          <Text style={{fontSize: 24}}> Go to the Forum</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
});
