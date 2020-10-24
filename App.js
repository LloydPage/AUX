import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1,}}>
      <Text style={{fontSize:"40px"}}>Listen Now: </Text>
      <ScrollView contentContainerStyle={styles.container}>
        <Rooms roomName="Jazz" likesNum="200" thumbsUpNum="10"/>
        <Rooms roomName="Soul" likesNum="300" thumbsUpNum="50"/>
        <Rooms roomName="Groove" likesNum="1200" thumbsUpNum="500"/>
        <Rooms roomName="Party Songs" likesNum="12345" thumbsUpNum="1000"/>
      </ScrollView>
      <View style={styles.bottomButton}>
        <Button name="Listen"/>
        <Button name="DJ"/>
      </View> 
    </View>
  )
}

function Rooms(props){
  return (
    <View style={styles.roomsStyle}>
      <Text style={{fontSize:"20px"}}>{props.roomName}      <Image source={{uri:"http://www.integriward.com/wp-content/uploads/2015/04/people-icon.png"}} style={styles.people}/>{props.likesNum}  <Image source={{uri:"https://emojis.wiki/emoji-pics/twitter/thumbs-up-twitter.png"}} style={styles.likes}/>{props.thumbsUpNum}</Text>   
    </View>
  )
}

function Button(props){
  return(
    <View style={{flex:1}}>
      <Text style={{fontSize:"40px",justifyContent: "space-around"}}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'flex-start',
  },

  roomsStyle: {
    height: 40,
    backgroundColor: "lightgray",
    marginHorizontal: 16,
    marginVertical: 8,
  },

  people: {
    width:20,
    height:10,
  },

  likes: {
    width: 10,
    height: 10,
  },

  bottomButton: {
    flexDirection: "row",
  },
});
