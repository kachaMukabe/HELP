import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Platform } from 'react-native';
import { Icon } from "react-native-elements";
import { Constants, Location, Permissions } from 'expo';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: null,
      errorMessage: null,
      sucess: false
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
    this._getLocationAsync();
    // message = {
    //   Name: "Jane/John Doe",
    //   Number: "0966111111",
    //   Message: "HELP!! I am in trouble at this location: ",
    //   Location: this.state.location.coords,
    //   ToList: ['+260966581925', '+260978006736']
    // }
    message = "HELP! I am in trouble at this location: " + JSON.stringify(this.state.location);
    await fetch("https://gbv.herokuapp.com/send/"+message).then((res)=>{
      console.log(res);
      if(res.status == 200){
        this.setState({sucess: true})
      }
    }).catch((err)=>{
      console.log("err"+err);
    });
  }
  static navigationOptions = {
    header: null,
    };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Menu')}
          >
            <Icon name="md-menu" type="ionicon" size={40} color="#000000" />
          </TouchableOpacity>
        </View>
        <View style={styles.centered}>
          <TouchableOpacity
            style={this.state.sucess ? styles.button_success : styles.button}
            onPress={()=>this.sendLocation()}
          >
            <Text style={{color: 'white', fontSize: 24}}>PANIC!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
  button_success: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:200,
    height:200,
    backgroundColor:'#4BB543',
    borderRadius:100,
  },
  menu: {
    marginTop: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  }
});
