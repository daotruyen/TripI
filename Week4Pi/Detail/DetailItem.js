import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Info from '../InfoRoom/Info'
import StarRating from 'react-native-star-rating';
import { get } from 'lodash';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Stars from 'react-native-stars';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const DetailItem = ({ navigation, data }) => {
    const [heart, setHeart] = React.useState(false);
    console.log('----------', data);
    return (
        <View style={styles.Item}
            onStartShouldSetResponder={() => navigation.navigate('Info', 
            { 
                data , 
                //hotel_id : get (data,'hotel_id', '')
            })}
        >
            <View>
                <Icon name="heart-circle-outline" size={20} style={{
                    position: "absolute",
                    zIndex: 1,
                    right: 10,
                    color: heart ? 'red' : 'yellow',
                }} onPress={() => {
                    setHeart(!heart)
                }} />

                <Image
                    style={{ height: 100, position: 'relative' }}
                    source={{
                        uri: get(data, 'logo', 'https://www.w3schools.com/w3css/img_snowtops.jpg')
                    }}

                />
                <View style={styles.allStar}>
                <Stars
                    default={get(data,'star_number','0')}
                    count={5}
                    half={true}
                    starSize={15} 
                    fullStar={<Icons name={'star'} style={[styles.myStarStyle]}/>}
                    emptyStar={<Icons name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                    halfStar={<Icons name={'star-half'} style={[styles.myStarStyle]}/>}
                    style={{backgroundColor:"yellow"}}
                />
                </View>
            </View>
            <View style={{ padding: 7 }}>
                <Text style={{ fontSize: 15, fontWeight: "700", }}>{get(data, 'root_name', '')}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="location" size={20} style={{ fontSize: 11.06, color: "red" }} />
                    <Text style={{ fontSize: 12, fontWeight: "400" }}>{get(data, 'root_address', '')}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="md-chatbox-ellipses" size={20} style={{ fontSize: 11.06, color: "red" }} />
                    <Text style={{ fontSize: 12, fontWeight: "400" }}>99 Đánh giá</Text>
                </View>
                <View style={{ flexDirection:'row',justifyContent:"space-between" }}>
                    <View><Text style={{paddingTop:10}}>{get(data,'name','')}</Text></View>
                    <View>
                    <Text style={{ fontSize: 18, fontWeight: '700', color: "#00BC9A" }}>2.370.000 VND</Text>
                    <Text style={{ fontSize: 11, fontWeight: '400' }}>mỗi đêm</Text>
                    </View>
                
                </View>
            </View>


        </View>
    );
}


export default DetailItem;
const styles = StyleSheet.create({
    Item: {
        borderRadius: 10,
        margin: 16,
        borderWidth: 1,
        backgroundColor: "#FFF",
    },
    heart: {
        position: "absolute",
        zIndex: 1,
        right: 10,
        color: 'white',
    },
    allStar: {
        flexDirection: 'row',
        color: "yellow",
        position: "absolute",
        right: 10,
        bottom: -6
    },
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
      },
      myEmptyStarStyle: {
        color: 'white',
      }
});