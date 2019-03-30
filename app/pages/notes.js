import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default class apple extends Component {
    render() {
        return(
            <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerText}> TODO </Text>
            </View>

            </View>

        );
    }
}
const styles = StyleSheet.create(
    {
        container: (
            flex:1,
        ),
        header: (
            backgroundColor: '#2e7d32',
            justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 10,
        ),
        headerText: (
            color: 'white',
            fontSize: 18,
            padding: 25,
        )
    }
)