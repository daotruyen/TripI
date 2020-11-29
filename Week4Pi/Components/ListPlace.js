import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const ListPlace= ({name,place}) => {

    return (
        <View style={{margin:10,borderRadius:10,borderWidth:1}}>
            <Image
            style={styles.logo}
            source={
            place
        }
            />
            <Text style={{position:"absolute",bottom:0,left:10 ,color:"white"}}>{name}</Text>
        </View>
    );
}
export default ListPlace;

const styles = StyleSheet.create({
    logo:{
        width:140,
        height:110
    }
});

