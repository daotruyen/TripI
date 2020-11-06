import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
const HeaderItem = ({navigation}) => {

  return (
    <View style={styles.header}>
      <View style={styles.headerSearch}>
        <Icon name="chevron-back-outline" size={20} style={styles.back} 
        onPress={() => navigation.goBack()}/>
        <View style={styles.inputHeader}>
          <Icon name="search" size={20} style={styles.iconSearch} />
          <TextInput placeholder="Tìm kiếm" style={styles.input}/>
        </View>
        <Icon name="md-location-outline" size={20} style={styles.mapIcon} />
      </View>
      <View style={styles.fillter}>
        <View style={styles.left}>
          <View style={styles.day}>
            <Text style={{fontSize:12}}>Ngày</Text>
            <Text style={{fontSize:13,fontWeight:"700",}}>12/12-13/12</Text>
          </View>
          <View style={styles.fillterLeft}>
            <Icon name="options" size={20} style={{color:"#00A79C"}}/>
            <Text style={{color:"#00A79C"}}>Bộ lọc</Text>
          </View>
        </View>
        <View style ={styles.right}>
          <View style={styles.room}>
            <Text style={{fontSize:12}}>Phòng</Text>
            <Text style={{fontSize:13,fontWeight:"700",}}>1 phòng - 2 người</Text>
          </View>
          <View style={styles.fillterRight}>
            <Icon name="ios-swap-horizontal" size={20} style={{color:"#00A79C"}}/>
            <Text style={{color:"#00A79C"}}>Sắp xếp</Text>
          </View>
        </View>
      </View>
    </View>
  );
}


export default HeaderItem;
const styles = StyleSheet.create({
  header:{position:'absolute',zIndex:1,width:"100%",},
  headerSearch:{
    flexDirection:'row',
    backgroundColor:"#C5F2EF",
    height:56,
  },
  back:{
    paddingTop:10,
    fontSize:30,
    paddingHorizontal:8,
  },
  iconSearch:{
    position:"absolute",
    paddingTop:15,
    paddingLeft:19,
  },
  input:{
    width:305,
  height:35,
borderRadius:30,

paddingLeft: 30,
margin:10,
backgroundColor:"white"
},
mapIcon:{
  fontSize:30,
  paddingTop:10,
  color:'red',
},
fillter:{
  height:120,
  borderRadius:30,
  backgroundColor:"#F1FFFD",
  flexDirection:'row',
  justifyContent:"space-around",
  paddingVertical:20,
  paddingTop: 40,
  marginTop:-20,
  zIndex:-1
},
fillterLeft:{
  flexDirection:'row',
  paddingVertical:5
},
fillterRight:{
  flexDirection:'row',
  paddingVertical:5
},
day:{
  borderRightWidth:1,
  paddingRight: 80,
}
});

