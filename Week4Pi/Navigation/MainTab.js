import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
  
    LogBox,
    ActivityIndicator,
  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeItem from '../Components/HomeItem';
import Detail from '../Detail/Detail'
import Info from '../InfoRoom/Info'
import Maps from '../MapsRoom/Maps'
import WhenLogin from '../UserInfo/WhenLogin'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabStack = () => {
    return (
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
        <Tab.Screen name="UserStackInSignIn" component={UserStackInSignIn} />
      </Tab.Navigator>
    )
  }
  export default TabStack;

  const HomeStack = () => {
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
  const UserStack = () => {
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
  const UserStackInSignIn = () => {
    return (
      <Stack.Navigator
        initialRouteName="home"
        headerMode='none'
      >
        <Stack.Screen name="User" component={WhenLogin} />
  
      </Stack.Navigator>
    )
  }

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
        <Stack.Screen name="Info" component={Info} />
      </Stack.Navigator>
  
    );
  }