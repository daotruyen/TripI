import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListItem from './ListItem';
import Icon from 'react-native-vector-icons/Ionicons';
import ListPlace from './ListPlace'
const Home=()=>{

  
    return (
      <View>
        <View >
          <View style={styles.title}>
            <Text style={{ paddingVertical: 10, fontSize: 16, fontWeight: '700', }}>Lich sử tìm kiếm</Text>
            <Icon name="caret-forward-circle-sharp" size={30} style={styles.link} />
          </View>

          <ScrollView horizontal={true}>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </ScrollView>
        </View>
        <View >
          <View style={styles.title}>
            <Text style={{ paddingVertical: 10, fontSize: 16, fontWeight: '700', }}>Lich sử tìm kiếm</Text>
            <Icon name="caret-forward-circle-sharp" size={30} style={styles.link} />
          </View>

          <ScrollView horizontal={true}>
            <ListPlace />
            <ListPlace />
            <ListPlace />
            <ListPlace />
          </ScrollView>
        </View>
        <View >
          <View style={styles.title}>
            <Text style={{ paddingVertical: 10, fontSize: 16, fontWeight: '700', }}>Lich sử tìm kiếm</Text>
            <Icon name="caret-forward-circle-sharp" size={30} style={styles.link} />
          </View>

          <ScrollView horizontal={true}>
            <ListPlace />
            <ListPlace />
            <ListPlace />
            <ListPlace />
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
