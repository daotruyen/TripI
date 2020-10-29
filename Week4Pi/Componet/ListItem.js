import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const ListItem = () => {
    return (
        <View style={styles.list}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <View style={styles.place}>
                <Icon name="map" size={10} style={{paddingTop:4,paddingStart:2}}
                    onPress={console.log("map")}
                />
                <Text>Nha Trang</Text>
            </View>
            <View style={styles.infoplace}>
                <View style={styles.icon}>
                    <Icon name="key-outline" size={10} style={{paddingTop:4,paddingStart:2}}/>
                    <Text style={{fontSize:14}}>1</Text>
                </View>
                <View style={styles.icon}>
                    <Icon name="person" size={10} style={{paddingTop:4,paddingStart:2}}/>
                    <Text style={{fontSize:14}}>2</Text>
                </View>
                <View style={styles.icon}>
                    <Icon name="calendar-sharp" size={10} style={{paddingTop:4,paddingStart:2}}/>
                    <Text style={{fontSize:14}}>12/12-13/12</Text>
                </View>
            </View>
        </View>
    );
}


export default ListItem;
const styles = StyleSheet.create({
    list:{
        width:140,
        height:110,
        borderRadius:10,
        borderWidth:1,
        color:"#FFFFFF",
        margin:10,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
            },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    tinyLogo: {
        width: 139,
        height: 54,
        borderRadius:10,
        
    },
    place:{
        flexDirection:"row",
        marginVertical:5,
    },
    icon:{
        flexDirection:'row'
    },
    infoplace:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
});
