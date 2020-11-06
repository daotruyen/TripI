
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import Header from './Header';
import Home from "./Home"
const HomeItem = ({navigation}) => {
  return (
     
      <SafeAreaView>
        <View>
          <Header navigation={navigation}/>
          <Home navigation={navigation}/>
        </View>
        
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default HomeItem;
