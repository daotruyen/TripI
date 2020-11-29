import React, { Component, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { get } from 'lodash';
import DetailItem from './DetailItem';
const ListDetail = ({ navigation, root_name }) => {

  const [data, setData] = React.useState([]);
  const [filter, setFilter] = React.useState([]);
  useEffect(() => {
    fetch('https://tripiii.herokuapp.com/api/hotels/search', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        root_name: root_name,
        filter:{
          
        }

      })
    })
      .then((res) => res.json())
      .then((responseData) => {
        //console.log('ajsakjsakjsb', responseData);
        setData(responseData.data)
        console.log('log',responseData.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  /* useEffect(()=>{
    fetch('https://tripiii.herokuapp.com/api/hotels/search',{
      method:"POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        price_min:"1000",
        price_max:"10000000",
        star_number:"1",
        overall_score:"3"
        
      })
        })
          .then((res) => res.json())
          .then((responseData) => {
            //console.log('ajsakjsakjsb', responseData);
            setFilter(responseData.data)
            //console.log('dagshvdjaskk',responseData.data)
          })
          .catch((error) => {
            console.error(error);
          });
    
  },[]) */
  return (
    <View>

      <FlatList
        // data={data && data.hotels ? data.hotels : []}
        data={get(data, 'hotels', [])}
        renderItem={({ item, index }) => {
          return <DetailItem data={item} navigation={navigation} />
        }}
        keyExtractor={item => item.hotel_id}
      />
    </View>
  );
}


export default ListDetail;
