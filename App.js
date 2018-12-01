import React from 'react';
import { StyleSheet, Text, View, Platform, Button } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      location: null,
      errorMessage: null,
    };
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({enableHighAccuracy:true});
    this.setState({ location });
  };

  sendLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.SMS)
    const isAvailable = await Expo.SMS.isAvailableAsync();
    if (isAvailable) {
      const { result } = await Expo.SMS.sendSMSAsync(['0978006736','0972111456'], this.state.location);
      console.log(result)
    } else {
      // misfortune... there's no SMS available on this device
    }
  }

  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{text}</Text>
        <Button title="Send Location" onPress={
          ()=> this.sendLocation()
        }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});
