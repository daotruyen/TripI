
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import Header from './Header';
import Home from "./Home"
const HomeItem = () => {
  return (
     
      <SafeAreaView>
        <View>
          <Header/>
          <Home/>
        </View>
        
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default HomeItem;
