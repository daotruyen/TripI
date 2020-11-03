import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Maps from '../MapsRoom/Maps'
import HeaderItem from './HeaderItem'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from './Detail';
const Stack = createStackNavigator();
function HeaderNav() {
    return (
      
        <Stack.Navigator initialRouteName="Detail">
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Maps" component={Maps} />
        </Stack.Navigator>
      
    );
  }
