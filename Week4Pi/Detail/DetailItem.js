import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Info from '../InfoRoom/Info'
import StarRating from 'react-native-star-rating';
import { get } from 'lodash';
const DetailItem = ({ navigation, data }) => {
    console.log('----------', data);
    const [star, setStar] = React.useState('');
    return (
        <View style={styles.Item}
            onStartShouldSetResponder={() => navigation.navigate('Info', { data })}
        >
            <View>
                <Icon name="heart-circle-outline" size={20} style={styles.heart} onPress={() => { }} />

                <Image
                    style={{ height: 100, position: 'relative' }}
                    source={{
                        uri: get(data, 'logo', 'https://www.w3schools.com/w3css/w3css_images.asp')
                    }}

                />

                <View style={styles.allStar}>
                    <Icon name="star" style={{ color: '#F2C042' }} />
                    <Icon name="star" style={{ color: '#F2C042' }} />
                    <Icon name="star" style={{ color: '#F2C042' }} />
                    <Icon name="star" style={{ color: '#F2C042' }} />
                    <Icon name="star" style={{ color: '#F2C042' }} />
                </View>
            </View>
            <View style={{ padding: 7 }}>
                <Text style={{ fontSize: 15, fontWeight: "700", }}>{get(data, 'relax_spa', '')}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="location" size={20} style={{ fontSize: 11.06, color: "red" }} />
                    <Text style={{ fontSize: 12, fontWeight: "400" }}>Cách trung tâm 6km</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="md-chatbox-ellipses" size={20} style={{ fontSize: 11.06, color: "red" }} />
                    <Text style={{ fontSize: 12, fontWeight: "400" }}>99 Đánh giá</Text>
                </View>
                <View style={{ alignItems: 'flex-end', }}>
                    <Text style={{ fontSize: 18, fontWeight: '700', color: "#00BC9A" }}>2.370.000 VND</Text>
                    <Text style={{ fontSize: 11, fontWeight: '400' }}>mỗi đêm</Text>
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
});