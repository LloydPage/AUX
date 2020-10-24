import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Button from "./commonComponents"

function RoomsList(props){
  return(
    <View style={{flex:1,}}>
        <Text style={{fontSize:40, marginTop:40}}>Listen Now: </Text>
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
      <Text style={{fontSize:20}}>{props.roomName}      <Image source={{uri:"http://www.integriward.com/wp-content/uploads/2015/04/people-icon.png"}} style={styles.people}/>{props.likesNum}  <Image source={{uri:"https://emojis.wiki/emoji-pics/twitter/thumbs-up-twitter.png"}} style={styles.likes}/>{props.thumbsUpNum}</Text>   
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  roomsStyle: {
    height: 40,
    backgroundColor: "lightgray",
    marginHorizontal: 16,
    marginVertical: 8,
  },

  people: {
    width:30,
    height:15,
  },

  likes: {
    width: 15,
    height: 15,
  },

  bottomButton: {
    marginBottom:40,
    flexDirection: "row",
  },
});


export default RoomsList;