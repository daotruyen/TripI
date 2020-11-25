import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const ListPlace= ({name}) => {
    return (
        <View style={{margin:10,borderRadius:10,borderWidth:1}}>
            <Image
        style={styles.logo}
        source={{
          uri:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
            }}
            />
            <Text style={{position:"absolute",bottom:0,left:10}}>{name}</Text>
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

