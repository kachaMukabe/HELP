import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';

export default class Number extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  static navigationOptions = {
    header: null,
    };

  render() {
    return (
      <View style={{flex:1, padding: 10, justifyContent: "center", alignItems:"center"}}>
        <TextInput
          style={styles.container}
          placeholder="Add your phone number"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word).join(' ')}
        </Text>
        <Button title="Enter" onPress={()=>{this.props.navigation.navigate('Panic')}}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2699fb',
    alignItems: 'center',
    justifyContent: 'center',
    width:300,
    height: 30,
    borderColor: 'black',
  },
});
