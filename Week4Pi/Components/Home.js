import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListItem from './ListItem';
import Icon from 'react-native-vector-icons/Ionicons';
import ListPlace from './ListPlace'
const data =[
  {index:1,key:1,image:'https://reactnative.dev/img/tiny_logo.png',
  space:"Nha Trang",people:2,timeStart:"12/12",timeENd:"13/12",
},
{index:2,key:1,image:'https://reactnative.dev/img/tiny_logo.png',
  space:"Nha Tran",people:2,timeStart:"12/12",timeENd:"13/12",
},
{index:3,key:1,image:'https://reactnative.dev/img/tiny_logo.png',
  space:"Nha Trang",people:2,timeStart:"12/12",timeENd:"13/12",
},
{index:4,key:1,image:'https://reactnative.dev/img/tiny_logo.png',
  space:"Nha Trang",people:2,timeStart:"12/12",timeENd:"13/12",
}
]
const Space = [
  {key:1,name :"Hà Nội"},
  {key:2,name :"TP Hồ Chí Minh"},
  {key:3,name :"Nha Trang"},
  {key:4,name :"Nam Định"}
]
const Home=({navigation})=>{
    
    return (
      <View style={{position:"relative",zIndex:-1}}>
        <View >
          <View style={styles.title}>
            <Text style={{ paddingVertical: 10, fontSize: 16, fontWeight: '700', }}>Lich sử tìm kiếm</Text>
            <Icon name="caret-forward-circle-sharp" size={30} style={styles.link} />
          </View>

          <ScrollView horizontal={true}>
            {data.map((data,index)=>{
              return (
                <ListItem 
                key={index} 
                navigation={navigation}
                data={data.space}
                />
              )
            })}
          </ScrollView>
        </View>
        <View >
          <View style={styles.title}>
            <Text style={{ paddingVertical: 10, fontSize: 16, fontWeight: '700', }}>Điểm đến</Text>
            <Icon name="caret-forward-circle-sharp" size={30} style={styles.link} />
          </View>

          <ScrollView horizontal={true}>
            {Space.map((data,index)=>{
              return (
                <ListPlace name={data.name}/>
              )
            })}
          </ScrollView>
        </View>
        <View >
          <View style={styles.title}>
            <Text style={{ paddingVertical: 10, fontSize: 16, fontWeight: '700', }}>Lich sử tìm kiếm</Text>
            <Icon name="caret-forward-circle-sharp" size={30} style={styles.link} />
          </View>

          <ScrollView horizontal={true}>
          {Space.map((data,index)=>{
              return (
                <ListPlace name={data.name}/>
              )
            })}
          </ScrollView>
        </View>
      </View>
    );
  }


export default Home;
const styles = StyleSheet.create({
  title:{
    flexDirection:"row",
    justifyContent: 'space-between',
    paddingStart:20,
    paddingVertical:5
  },
  link:{
    paddingRight:10
  }
});
