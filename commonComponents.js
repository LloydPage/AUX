import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

function Button(props){
  return(
    <View style={{flex:1}}>
      <Text style={{fontSize:40,justifyContent: "space-around"}}>{props.name}</Text>
    </View>
  )
}

export default Button;