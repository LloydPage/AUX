import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';

// props i.e.: {username: "John Smith"}
function InsideRoom(props){

  const[currMusicName, setCurrMusicName] = useState("jazz song 1")
  const[currMusician, setCurrMusician] = useState("jazz musician 1")
  const[listenersNum, setListenersNum] = useState(0)
  const[likesNum, setLikesNum] = useState(0)

  return(
    <View style={{flex:1}}>
      <Text style={styles.headline}>{props.username}</Text>
      <View contentContainerStyle={styles.container}>
        <Text style={styles.subLine}>You are listening to:</Text>
        <Text style={styles.subLine}>{currMusicName} by {currMusician}</Text>
      </View>
      <View style={styles.sideToSide}>
        <Info listenersNum={listenersNum} likesNum={likesNum}/>
        <Button title="Like"/>
      </View>
      <View style={styles.sideToSide}>
          <Button title="Listen"/>
          <Button title="DJ"/>
      </View>
    </View>
    )
}

function Info(props){
  return(
    <View>
      <Text style={styles.subLine}>{props.listenersNum} listeners </Text>
      <Text style={styles.subline}>{props.likesNum} likes </Text>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headline: {
    fontSize:40, 
    marginTop:40,
  },

  subLine: {
    fontSize:20,
  },

  sideToSide: {
    flexDirection: "row",
  },
});


export default InsideRoom;
