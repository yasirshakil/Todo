import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Login from './app/pages/Login';

export default class Bananas extends Component {
  render() {
    
    return (
<View style={styles.container}>
    <Image
      style={{alignItems: "center", justifyContent:"center", width: 50, height: 50}}
      source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} />
      <Text style={styles.logotext}> TODO </Text>
     <Login />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logotext: {
    backgroundColor: '#DDDDDD',
    fontSize: 18,
    marginVertical: 15,
  },
 
});
