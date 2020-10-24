import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import Button from './button';

function SignInPage(props){
  return(
    <View style={styles.container}>
        <Title/>
        <Button button="Log In"/>
        <Button button="Sign Up"/>
      </View>
    )
}

function Title(){
  return(

    //add logo here
    <Text style={styles.title}> AUX </Text>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  title: {
    fontSize:100,
    color:'#f9f9f9',
    marginBottom: '10%',
    textAlign: 'center',
  },

});

export default SignInPage;