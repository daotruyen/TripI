import React, { Component } from 'react';
import { View, Text ,ScrollView} from 'react-native';
import HeaderItem from './HeaderItem'
import ListDetail from './ListDetail';
const Detail = () => {
  
  
    return (
      <View>
    <HeaderItem/>
      <ScrollView>
        
        <ListDetail/>
      </ScrollView>
      </View>
    );
  }


export default Detail;
