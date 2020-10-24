import { NunitoSans_600SemiBold } from '@expo-google-fonts/dev';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import logo from '../images/logo.png';


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

    <Text style={styles.title}><Image href="../images/logo.png"></Image> AUX </Text>
  )
}

function Button(props){
  return(
    <View style={styles.button}>
      <Text style={styles.buttonText}>{props.button}</Text>
    </View>
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
    fontFamily: 'Nunito, sans-serif',
    fontSize:100,
    color:'#f9f9f9',
    marginBottom: '10%',
    textAlign: 'center',
  },

  button:{
    backgroundColor: '#292929',
    paddingTop:'5%',
    paddingRight: '15%',
    paddingLeft:'15%',
    paddingBottom:'5%',
    marginBottom:'10%',
    borderRadius:30,
  },

  buttonText:{
    color:'#f9f9f9',
  },

});

export default SignInPage;