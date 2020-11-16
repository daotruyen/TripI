import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const ListItem = ({navigation}) => {
    const shadowStyle ={shadowOpacity:1,shadowColor: '#000',}
    return (
        <View style={[styles.shadow,shadowStyle ]}>
        <View style={[styles.list]}
        onStartShouldSetResponder={() => navigation.navigate('Info')}
        >
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
                <Text style={{paddingLeft:3}}>Nha Trang</Text>
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
        </View>
    );
}


export default ListItem;
const styles = StyleSheet.create({
shadow:{
    flex:1,
},
    list:{
        
        width:140,
        height:110,
        borderRadius:10,
        color:"#FFFFFF",
        margin:10,
        //backgroundColor:"green"
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
