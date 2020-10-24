import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import SignInPage from './src/signInPage';
import RoomsList from './src/RoomsList';
import InsideRoom from './src/insideRoom';
import Button from './src/commonComponents';

export default function App() {
  return (
    <SignInPage/>
  )
}
