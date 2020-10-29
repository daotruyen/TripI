
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './Componet/Header';
import MyButton from './Test/Test';
import ListItem from "./Componet/ListItem";
import Home from "./Componet/Home"
import HomeItem from './Componet/HomeItem';
import Detail from './Detail/Detail'
import Info from './InfoRoom/Info'
import Maps from './MapsRoom/Maps'
const App = () => {
  return (
     
      <SafeAreaView>
       <Info/>

      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
