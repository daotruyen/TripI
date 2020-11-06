import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DetailItem from './DetailItem';
const ListDetail = ({navigation}) => {
  
    const arr=[
      {number:1},
      {number:2},
      {number:3},
      {number:4},
      {number:5},
      {number:6},
      {number:7},
      {number:8},
      
    ]
    return (
      <View>
        {arr.map((arr,index)=>{
          return(
            <DetailItem key={index} navigation={navigation}/>
          )
        })}
      </View>
    );
  }


export default ListDetail;
