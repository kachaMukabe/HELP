import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
    header: null,
    };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
          <Text>Menu</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          // onPress={this.onPress}
        >
          <Text style={{color: 'white', fontSize: 24}}>PANIC!</Text>
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
  button: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:200,
    height:200,
    backgroundColor:'#d41515',
    borderRadius:100,
  },
  menu: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start'
  }
});
