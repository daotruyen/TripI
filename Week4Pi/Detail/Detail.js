import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import HeaderItem from './HeaderItem'
import ListDetail from './ListDetail';
import Filter from './Filter'
const Detail = ({ navigation, ...props }) => {


  return (
    <SafeAreaView>
      <View>
        <HeaderItem />
      <ScrollView style={{backgroundColor:"#00B3A7",zIndex:1,position:"relative"}}>

          <ListDetail navigation={navigation}/>
        </ScrollView>
        
      </View>
    </SafeAreaView>
  );
}


export default Detail;
