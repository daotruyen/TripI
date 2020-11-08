
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  LogBox,
  ActivityIndicator
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


//import ListItem from "./Componet/ListItem";
//import Home from "./Componet/Home"


import Header from './Components/Header';
import MyButton from './Test/Test';
import ListItem from "./Components/ListItem";
import Home from "./Components/Home"
import Login from './User/Login'
import Signup from './User/SignUp'
import HomeItem from './Components/HomeItem';
import Detail from './Detail/Detail'
import Info from './InfoRoom/Info'
import Maps from './MapsRoom/Maps'
import Info_User from './UserInfo/Info_User'
import WhenLogin from './UserInfo/WhenLogin'
import Icon from 'react-native-vector-icons/Ionicons';

import {AuthContext} from './Test/Context'
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const DetailStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="detail"
      headerMode='none'
    >
      
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen
        name="Maps"
        component={Maps}
      />
      <Stack.Screen name="Info" component={Info}/>
    </Stack.Navigator>

  );
}

const HomeStack = ()=>{
  return (
    <Stack.Navigator
      initialRouteName="home"
      headerMode='none'
    >
      <Stack.Screen name="Home" component={HomeItem} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="Maps" component={Maps} />
    </Stack.Navigator>
  )
}
const UserStack = ()=>{
  return (
    <Stack.Navigator
      initialRouteName="home"
      headerMode='none'
    >
      <Stack.Screen name="User" component={Info_User} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signin" component={Signup} />
      
    </Stack.Navigator>
  )
}
const App = () => {
  LogBox.ignoreAllLogs(true);
  const [isLoading,setIsLoading] = React.useState(true);
  const [userToken,setUserToken] =React.useState(null);
  const authContext = React.useMemo(()=>({
    signIn:()=>{
      setUserToken("truyen")
      setIsLoading(false);
    },
    signOut:()=>{
      setUserToken(null)
      setIsLoading(false);
    },
    signUp:()=>{
      setUserToken("truyen")
      setIsLoading(false);
    },
  }))
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },10000)
  },[])
  if(isLoading){
    return (
      <View>
        <ActivityIndicator size="large"/>
      </View>
    )
  }
  return (

    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeStack') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'DetailStack') {
              iconName = focused ? 'list' : 'list-outline';
            }
            else if (route.name === 'User') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="DetailStack" component={DetailStack} />
        <Tab.Screen name="UserStack" component={UserStack} />
      </Tab.Navigator>
    </NavigationContainer>
</AuthContext.Provider>

  );
};

const styles = StyleSheet.create({

});

export default App;
