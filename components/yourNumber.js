import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';

export default class Number extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: ''};
  }
  static navigationOptions = {
    header: null,
    };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 70, fontSize: 45, color: 'white'}}>HELP!</Text>
        <TextInput
          style={styles.input}
          placeholder="Add your phone number"
          type='number'
          onChangeText={(number) => this.setState({number})}
        />
        <Text style={{padding: 10, fontSize: 40}}>
          {this.state.number.split(' ').map((num) => num).join(' ')}
        </Text>
        <Button style={{backgroundColor: 'white', color: 'black'}} title="Enter" onPress={()=>{this.props.navigation.navigate('Panic')}}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2699fb',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
  },
  input: {
    backgroundColor: '#ffffff',
    width:300,
    height: 30,
    borderColor: 'black',
    borderWidth: 1
  }
});
