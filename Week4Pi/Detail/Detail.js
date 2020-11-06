import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import HeaderItem from './HeaderItem'
import ListDetail from './ListDetail';
const Detail = ({ navigation, ...props }) => {


  return (
    <SafeAreaView>
      <View>
        <HeaderItem />
        <ScrollView>

          <ListDetail navigation={navigation}/>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}


export default Detail;
