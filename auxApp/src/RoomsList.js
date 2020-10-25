import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Footer from "./footer";

function RoomsList(props){
  return(
    <View style={styles.container}>
        <Text style={styles.header}>Listen Now </Text>
        <RoomsContainer/>
      <Footer/>
      </View>
    )
}

function Rooms(props){
  return (
    <View style={styles.roomsStyle}>
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