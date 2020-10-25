import { FiraSansExtraCondensed_100Thin } from '@expo-google-fonts/dev';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Button from "./button";

function Footer(props){
    return(
      <View style={styles.footerBox}>
            <Button button="Listen"/>
            <View style={styles.line}></View>
            <Button button="DJ"/>
      </View>
    )
  }

  const styles = StyleSheet.create({
    footerBox:{
        flexDirection:'row',
        width:'100%',
        backgroundColor:'#292929',
        alignItems:'center',
        justifyContent:'center',
        position: 'absolute',
        bottom: 0,
    },

    line:{
        width: 1,
        height:'100%',
        backgroundColor:'#121212',
    }

  
  });
  
  export default Footer;
  