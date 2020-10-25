import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Footer from "./footer";

function RoomsList(props){
  return(
<<<<<<< HEAD
    <View style={styles.container}>
        <Text style={styles.header}>Listen Now </Text>
        <RoomsContainer/>
      <Footer/>
=======
    <View style={{flex:1,}}>
        <Text style={{fontSize:40, marginTop:40}}>Listen Now: </Text>
        <ScrollView contentContainerStyle={styles.container}>
          <Rooms roomName="Jazz" listenersNum="200" thumbsUpNum="10"/>
          <Rooms roomName="Soul" listenersNum="300" thumbsUpNum="50"/>
          <Rooms roomName="Groove" listenersNum="1200" thumbsUpNum="500"/>
          <Rooms roomName="Party Songs" listenersNum="12345" thumbsUpNum="1000"/>
        </ScrollView>
        <View style={styles.bottomButton}>
          <Button name="Listen"/>
          <Button name="DJ"/>
        </View> 
>>>>>>> a387f9103e0d5c7ab70a3375b72d83fbbfcae8dc
      </View>
    )
}

function Rooms(props){
  return (
    <View style={styles.roomsStyle}>
<<<<<<< HEAD
      <Text style={styles.roomsName}>{props.roomName}</Text> 
      <View style={styles.interaction}>
        <View style={styles.nPeople}>     
          <Image source={{uri:"http://www.integriward.com/wp-content/uploads/2015/04/people-icon.png"}} style={styles.people}/>
          <Text style={styles.peopleText}>{props.likesNum} </Text>
        </View>
        <View style={styles.nThumbsUp}>
          <Image source={{uri:"https://emojis.wiki/emoji-pics/twitter/thumbs-up-twitter.png"}} style={styles.likes}/>
          <Text style={styles.likesText}>{props.thumbsUpNum}</Text>
        </View>   
      </View>
=======
      <Text style={{fontSize:20}}>{props.roomName}      <Image source={{uri:"http://www.integriward.com/wp-content/uploads/2015/04/people-icon.png"}} style={styles.people}/>{props.listenersNum}  <Image source={{uri:"https://emojis.wiki/emoji-pics/twitter/thumbs-up-twitter.png"}} style={styles.likes}/>{props.thumbsUpNum}</Text>   
>>>>>>> a387f9103e0d5c7ab70a3375b72d83fbbfcae8dc
    </View>
  )
}

function RoomsContainer(props){
  return(
    <ScrollView style={styles.roomsContainer}>
      <Rooms roomName="Jazz" likesNum="200" thumbsUpNum="10"/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize:40, 
    marginTop:60,
    marginBottom:30,
    marginLeft: 20,
    color: "#f9f9f9",
  },

  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  roomsContainer:{
    marginLeft:5,
    width:'95%',
  },

  roomsStyle: {
    flexDirection:'row',
    height: 50,
    width: '100%',
    backgroundColor: "#292929",
    padding: 10,
    marginBottom: '5%',
    borderRadius:30,
    justifyContent: 'space-between',
    alignItems: 'center',

  },

  roomsName: {
    color:'#f9f9f9',
    marginLeft: 10,
  },

  interaction:{
    width:'40%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },

  nPeople:{
    flexDirection:'row',
    textAlign:'center',
    width:'50%',
    alignItems:'center',
  },

  peopleText:{
    color:'#f9f9f9',
    paddingLeft:5,
  },

  nThumbsUp:{
    flexDirection:'row',
    textAlign:'center',
    width:'50%',
    alignItems:'center'
  },

  likesText:{
    color:'#f9f9f9',
    paddingLeft:5,
  },

  people: {
    width:10,
    height:15,
  },

  likes: {
    width: 10,
    height: 10,
  },
});


export default RoomsList;