import React, { Component,useEffect } from 'react';
import { View, Text } from 'react-native';
import DetailItem from './DetailItem';
const ListDetail = ({navigation,route}) => {
  const {  otherParam } = route.params;
  const [MainJSON, setMainJSON] = React.useState([]);
  const [Data,setData]=React.useState([]);
  
  useEffect(()=>{
    fetch('https://tripiii.herokuapp.com/api/hotels/search'),{
      method:"POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(JSON.stringify(otherParam))
    }
    .then((res)=>res.json())
    .then ((responseData)=>{
      setData(responseData.data)
      console.log(responseData.data)
    })
    .catch((error) => {
      console.error(error);
   });
  },[]);
    return (
      <View>
        {Data.map((arr,index)=>{
          return(
            <DetailItem navigation={navigation}/>
          )
        })}
      </View>
    );
  }


export default ListDetail;
