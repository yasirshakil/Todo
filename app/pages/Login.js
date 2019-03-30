import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';



export default class apple extends Component {
    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox} placeholder= "name"/>
            
     <TouchableOpacity style={styles.button}>
      
      <Text style={styles.buttonText}> Login </Text>
    
    </TouchableOpacity>
            
            </View>
        );
    }
}
    

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
inputBox: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    width:300,
    fontSize: 18,
    marginVertical: 20,
},
buttonText: {
    width: 300,
    color: '#ffffff',
    fontSize: 22,
    marginLeft: 110,
},
button:
{
    justifyContent: 'center',
        width: 300,
        marginVertical: 30,
        backgroundColor: '#2e7d32',
}
    
    });