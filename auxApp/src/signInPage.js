import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground} from 'react-native';
import Button from './button';

function SignInPage(props){
  return(
    <View style={styles.container}>
      <ImageBackground source={{uri:"https://i.pinimg.com/originals/77/20/f2/7720f2df7e34af2423f181d78be591be.jpg"}} style={styles.container}>
        <Title/>
          <Button button="Log In"/>
          <Button button="Sign Up"/>
      </ImageBackground>
    </View>
    )
}

function Title(){
  return(
    <Text style={styles.title}>AUX</Text>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
  },
  
  title: {
    fontSize:100,
    color:'#f9f9f9',
    marginBottom: '10%',
    textAlign: 'center',
  },

});

export default SignInPage;