import React, { Component } from 'react';
import { StyleSheet, Text, View, Title } from 'react-native';
import { Input, Item, Button, Label } from "native-base";


import firebase from 'firebase';


export default class AuthenticationScreen extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      email: '',
      password: ''
    })
  };

  signUpUser = (email, password) => {

    try{

      if(this.state.password.length<6) {
        alert("Please enter a password of atleast 6 characters.")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password);
      alert("Thank you for signing up, you may now log in.")
    }
    catch(error) {
      console.log(error.toString())
    }
  };

  logInUser = (email, password) => {

    try{

      if(email == false){
        alert("Please enter an Email.")
      }
      else if(user = false){
        alert("This account does not exist, please sign up")
      }
      else{      
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
        console.log(email) 
        alert("You are signed in.")
      });
    }
    }
    catch(error) {
      console.log(error.toString())
    }
  };

  render() {
    return(
      <View style={styles.container}>

  <Text style={{fontSize:30, alignSelf: 'center', marginBottom:20}}> Chat App Log in/Sign up</Text>

      <Item floatingLabel style={ styles.alignment }>
          <Label>Email</Label>
          <Input 
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(email) => this.setState({email})}
          />
      </Item>

      <Item floatingLabel style={ styles.alignment }>
          <Label>Password</Label>
          <Input 
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(password) => this.setState({password})}
          />
      </Item>

      <Button style={ styles.alignment } full rounded onPress={() => this.logInUser(this.state.email, this.state.password)}>
        <Text style={{ color: "white" }}>Log In</Text>
      </Button>

      <Button style={{ width: 300, alignSelf: 'center' }} full rounded onPress={() => this.signUpUser(this.state.email, this.state.password)}>
        <Text style={{ color: "white" }}>Sign Up</Text>
      </Button>
  </View>
    );
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },

  alignment: {
    marginBottom: 40,
    width: 300,
    alignSelf: 'center'
  }
});