import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Text, TextInput } from 'react-native';

export default class Number extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={styles.container}
          placeholder="Add your phone number"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word).join(' ')}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2699fb',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderColor: 'black',
  },
});
