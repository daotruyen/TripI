
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  LogBox
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './Componet/Header';
import MyButton from './Test/Test';
import ListItem from "./Componet/ListItem";
import Home from "./Componet/Home"
import HomeItem from './Componet/HomeItem';
import Detail from './Detail/Detail'
import Info from './InfoRoom/Info'
import Maps from './MapsRoom/Maps'
import Info_User from './UserInfo/Info_User' 
import WhenLogin from './UserInfo/WhenLogin'
import Icon from 'react-native-vector-icons/Ionicons';
const Tab =createBottomTabNavigator();
const App = () => {
  LogBox.ignoreAllLogs(true);
  return (
     
      
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                  iconName = focused
                    ? 'home'
                    : 'home-outline';
                } else if (route.name === 'Detail') {
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
            <Tab.Screen name="Home" component={HomeItem}/>
            <Tab.Screen name="Detail" component={Detail}/>
            <Tab.Screen name="User" component={Info_User}/>
          </Tab.Navigator>
        </NavigationContainer>
        
      
  );
};

const styles = StyleSheet.create({
  
});

export default App;
