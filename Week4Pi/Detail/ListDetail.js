import React, { Component, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import DetailItem from './DetailItem';
const ListDetail = ({ navigation, root_name }) => {

  const [Data, setData] = React.useState([]);
  const [filter,setFilter] =React.useState([]);
  console.log('data',Data);
  const array = Data.hotels;
  console.log('array',array)
  useEffect(() => {
    fetch('https://tripiii.herokuapp.com/api/hotels/search', {
      method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    root_name: root_name ,
    
  })
    })
      .then((res) => res.json())
      .then((responseData) => {
        //console.log('ajsakjsakjsb', responseData);
        setData(responseData.data)
        //console.log('dagshvdjaskk',responseData.data)
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
      data={array}
      renderItem={({item})=>{
        //<DetailItem navigation={navigation}/>
        <View>
          <Text>dshgfdvsjkkd</Text>
        </View>
      }}
      keyExtractor={item => item.hotel_id}
      />
    </View>
  );
}


export default ListDetail;
