import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
// import { firebaseConfig } from './config';

// firebase.initializeApp(firebaseConfig);

export default class UsersScreen extends Component {
    state = { user: "" };
    
  componentDidMount() {
    const user  = firebase.auth().currentUser;
    this.setState({ user:user });

  }
    render(){
        const { user } = this.state
        return ( 
            
            <View style={styles.container}><Text>{user.email}</Text></View>
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
  
    alignment: {
      marginBottom: 40,
      width: 300,
      alignSelf: 'center'
    }
  });

