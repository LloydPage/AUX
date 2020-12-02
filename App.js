import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import SignInPage from './src/signInPage';
import RoomsList from './src/RoomsList';
import InsideRoom from './src/insideRoom';
import StartDJ from './src/startDJ';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GoIntoARoom">
        <Stack.Screen name="SignInPage" component={SignInPage} />
        <Stack.Screen name="RoomsList" component={RoomsList} />
        <Stack.Screen name="InsideRoom" component={InsideRoom} />
        <Stack.Screen name="StartDJ" component={StartDJ} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

"0 mod 15", "1 mod 15", "2 mod 15", "3 mod 15", "4 mod 15", "5 mod 15", "6 mod 15", "7 mod 15", 
                                            "8 mod 15", "9 mod 15", "10 mod 15", "11 mod 15", "12 mod 15", "13 mod 15", "14 mod 15"