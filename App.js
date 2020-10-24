import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';
import RoomsList from './RoomsList'

export default function App() {
  return (
    <RoomsList/>
  )
}

function StartDJ(props){
  return(
    <View>
      <Text style={styles.headline}>{props.username}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  headline: {
    fontSize:40, 
    marginTop:40,
  }
});
