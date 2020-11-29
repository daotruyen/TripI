
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import Header from './Header';
import Home from "./Home";

const HomeItem = ({navigation}) => {
  return (
     
      <SafeAreaView>
        <View style={styles.container}>
          <Header navigation={navigation} style={styles.header}/>
          <Home navigation={navigation}  style={styles.main}/>
        </View>
        
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    position:'relative'
  },
   header:{
     position:"absolute",
     zIndex:10,
   },
   main:{
     position:"absolute",
     zIndex:-1
   }
})

export default HomeItem;
