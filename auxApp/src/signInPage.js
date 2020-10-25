import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, TouchableHighlight} from 'react-native';
import Button from './button';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function SignInPage(props){
  return(
    <View style={styles.container}>
      <ImageBackground source={{uri:"https://i.pinimg.com/originals/77/20/f2/7720f2df7e34af2423f181d78be591be.jpg"}} style={styles.container}>
        <Title/>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#none"
            onPress={() => props.navigation.navigate("RoomsList")}>
            <Button button="Log In"/>
          </TouchableHighlight>
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