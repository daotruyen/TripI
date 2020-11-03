import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import HeaderItem from './HeaderItem'
import ListDetail from './ListDetail';
const Detail = ({ navigation }) => {


  return (
    <SafeAreaView>
      <View>
        <HeaderItem />
        <ScrollView>

          <ListDetail />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}


export default Detail;
