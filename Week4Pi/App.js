
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,Text,
  LogBox,
  ActivityIndicator,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import ListItem from "./Componet/ListItem";
//import Home from "./Componet/Home"
import TabStack from './Navigation/MainTab'
import Signup from './User/SignUp'
import Detail from './Detail/Detail'
import Info from './InfoRoom/Info'
import Maps from './MapsRoom/Maps'
import Info_User from './UserInfo/Info_User'
import WhenLogin from './UserInfo/WhenLogin'
import Icon from 'react-native-vector-icons/Ionicons';
import Login from './User/Login'
import { AuthContext } from './Test/Context';
import RootStackScreen from './Navigation/RootStack';
import UserProfile from './User/UserProfile'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
//const AuthContext = React.createContext();
const App = () => {
const initialLoginState = {
  isLoading: true,
  userName: null,
  userToken: null,
};
const loginReducer = (prevState, action) => {
  switch( action.type ) {
    case 'RETRIEVE_TOKEN': 
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'LOGIN': 
      return {
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
    case 'LOGOUT': 
      return {
        ...prevState,
        userName: null,
        userToken: null,
        isLoading: false,
      };
    case 'REGISTER': 
      return {
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
  }
};
const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

const authContext = React.useMemo(() => ({
  signIn: async(foundUser) => {
    // setUserToken('fgkj');
    // setIsLoading(false);
    const userToken = String(foundUser[0].userToken);
    const userName = foundUser[0].username;
    
    try {
      await AsyncStorage.setItem('userToken', userToken);
    } catch(e) {
      console.log(e);
    }
    // console.log('user token: ', userToken);
    dispatch({ type: 'LOGIN', id: userName, token: userToken });
  },
  signOut: async() => {
    // setUserToken(null);
    // setIsLoading(false);
    try {
      await AsyncStorage.removeItem('userToken');
    } catch(e) {
      console.log(e);
    }
    dispatch({ type: 'LOGOUT' });
  },
  signUp: () => {
    // setUserToken('fgkj');
    // setIsLoading(false);
  },
}), []);
useEffect(() => {
  setTimeout(async() => {
    // setIsLoading(false);
    let userToken;
    userToken = null;
    try {
      userToken = await AsyncStorage.getItem('userToken');
    } catch(e) {
      console.log(e);
    }
    // console.log('user token: ', userToken);
    dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
  }, 1000);
}, []);

if( loginState.isLoading ) {
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size="large"/>
    </View>
  );
}
return (
  <AuthContext.Provider value={authContext}>
    <NavigationContainer >
      { loginState.userToken !== null ? (
        <TabStack/>
      )
    :
      <RootStackScreen/>
      //<UserProfile/>
    }
    </NavigationContainer>
    </AuthContext.Provider>
)}



export default App;
