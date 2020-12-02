import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, ImageBackground, TouchableHighlight} from 'react-native';
import Button from './button';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

const access_token = null;

function SignInPage(props){

  const [logInStatus, setLogInStatus]= React.useState('signed out');

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      responseType: AuthSession.ResponseType.Token,
      clientId: 'e91e019530564dad91659c9df8b02519',
      clientSecret: '785348857b804877a8d8b52748dffd98',
      scopes: ['user-read-email', 'playlist-modify-public'],
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      // For usage in managed apps using the proxy
      redirectUri: 'http://localhost:19006',
    },
    discovery
  );

  React.useEffect(() => {
      if (response?.type === 'success') {
        setLogInStatus('signed in');
        const { access_token } = response.params;
        console.log(access_token);
        props.navigation.navigate("RoomsList");
        }
    }, [response, props.navigation.navigate]);

  return(
    <View style={styles.container}>
      <ImageBackground source={{uri:"https://i.pinimg.com/originals/77/20/f2/7720f2df7e34af2423f181d78be591be.jpg"}} style={styles.container}>
        <Title/>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => promptAsync()}>
            <Button button="Log In"/>
          </TouchableHighlight>
          <Button button="Sign Up"/>
      </ImageBackground>
    </View>
    )
}

function Title(){
  return(
    <Text style={styles.title}>AUX</Text>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
  },
  
  title: {
    fontSize:100,
    color:'#f9f9f9',
    marginBottom: '10%',
    textAlign: 'center',
  },

});

export default SignInPage;