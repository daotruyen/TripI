import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, ScrollView, Image ,TouchableOpacity} from 'react-native';

import Carousel, { Pagination } from '@amazingbeerbelly/react-native-snap-carousel';
import ListInfo from './ListInfo'
import Icon from 'react-native-vector-icons/Ionicons';
import { scrollInterpolator, animatedStyles } from './animation';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);


const Info = ({navigation}) =>{

    const [heart, setHeart] = React.useState(false)

    const RedHeart = (heart)=>{
      heart = !heart
    }
    return (
      <SafeAreaView>
      <View>
      <ScrollView>
        <View>
          <Icon name="heart-circle-outline" size={40} style={styles.heart}/>
          <Image  source={require('../imgTest/logo.jpg')} style={styles.logoImg}/>
          <Icon name="chevron-back-outline" size={40} style={styles.back}
          onPress={() => navigation.goBack()}
          />
        </View>
        <View>
          <View style={{paddingLeft:10}}>
          <Text style={styles.nameRoom}>Tên Khách Sạn</Text>
          <View style={{ flexDirection: 'row',paddingVertical:5 }}>
            <View style={styles.allStar}>
              <Icon name="star" style={{ color: '#F2C042' }} />
              <Icon name="star" style={{ color: '#F2C042' }} />
              <Icon name="star" style={{ color: '#F2C042' }} />
              <Icon name="star" style={{ color: '#F2C042' }} />
              <Icon name="star" style={{ color: '#F2C042' }} />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="md-chatbox-ellipses" size={20} style={{ fontSize: 11.06, color: "red" }} />
              <Text style={{ fontSize: 12, fontWeight: "400" }}>99 Đánh giá</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' ,paddingBottom:5,}}>
            <Icon name="location" size={20} style={{ fontSize: 11.06, color: "red" }} />
            <Text style={{ fontSize: 12, fontWeight: "400" }}>Địa chỉ khách sạn</Text>
          </View>
          </View>
          <View style={styles.container}
            onStartShouldSetResponder={() => navigation.navigate('Maps')}>
          
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
              <Marker
                coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                title={'Sys Homestay'}
              ></Marker>
            </MapView>
            <Text style={styles.seeMap}>Xem bản đồ</Text>
          </View>
          <View>
            <View >
              <Text style={styles.title} >Giá tốt nhất</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={{position:"absolute",padding: 8,fontSize:15,fontWeight:"700"}}>Agoda</Text>
                <View style={{ alignItems: 'flex-end',paddingRight: 7 }}>
                  <Text style={{ fontSize: 18, fontWeight: '700', color: "#00BC9A" }}>2.370.000 VND</Text>
                  <Text style={{ fontSize: 11, fontWeight: '400' }}>mỗi đêm</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.title}>Giá khác</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={{position:"absolute",padding: 8,fontSize:15,fontWeight:"700"}}>Agoda</Text>
                <View style={{ alignItems: 'flex-end', paddingRight: 7,}}>
                  <Text style={{ fontSize: 18, fontWeight: '700', color: "#00BC9A" }}>2.370.000 VND</Text>
                  <Text style={{ fontSize: 11, fontWeight: '400' }}>mỗi đêm</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={{position:"absolute",padding: 8,fontSize:15,fontWeight:"700"}}>Agoda</Text>
                <View style={{ alignItems: 'flex-end',paddingRight: 7 }}>
                  <Text style={{ fontSize: 18, fontWeight: '700', color: "#00BC9A" }}>2.370.000 VND</Text>
                  <Text style={{ fontSize: 11, fontWeight: '400' }}>mỗi đêm</Text>
                </View>
              </TouchableOpacity>
              <Text style={{right:0}}>Xem thêm</Text>

            </View>
            <View style={styles.dichvu}>
              <Text style={{fontSize:15,fontWeight:"700"}}>Tiện ích, dịch vụ</Text>
              <View style={{flexDirection:'column',alignContent:"stretch",width:200}}>
                <View style={{ flexDirection: 'row' ,width: "50%",}}>
                  <Icon name="fast-food" size={20}/>
                  <Text>Dịch vụ abc</Text>
                </View>
                <View style={{ flexDirection: 'row' ,width: "50%", }}>
                  <Icon name="fast-food" size={20}/>
                  <Text>Dịch vụ abc</Text>
                </View>
                <View style={{ flexDirection: 'row'  ,width: "50%",}}>
                  <Icon name="fast-food" size={20}/>
                  <Text>Dịch vụ abc</Text>
                </View>
                <View style={{ flexDirection: 'row'  ,width: "50%",}}>
                  <Icon name="fast-food" size={20}/>
                  <Text>Dịch vụ abc</Text>
                </View>
              </View>
            </View>
            <View>
              <Text>Mô tả khách sạn</Text>
              <View>
                <Text>Đây là mô tả khách sạn</Text>
              </View>
            </View>

            <View>
              <Text>Đánh giá</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    style={styles.logo}
                    source={{
                      uri:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                    }}
                  />
                  <Text>Tên đánh giá</Text>
                </View>
                <View style={styles.allStar}>
                  <Icon name="star" style={{ color: '#F2C042' }} />
                  <Icon name="star" style={{ color: '#F2C042' }} />
                  <Icon name="star" style={{ color: '#F2C042' }} />
                  <Icon name="star" style={{ color: '#F2C042' }} />
                  <Icon name="star" style={{ color: '#F2C042' }} />
                </View>
                
              </View>
              <View>
                  <Text>Nội dung đánh giá</Text>
                </View>
                <Text>Xem thêm</Text>
            </View>
            
          </View>
          
        </View>
      </ScrollView>
      <View style={{flexDirection:'row',justifyContent:'space-between',position: 'absolute', left: 0, right: 0, bottom: 0,backgroundColor:"#fff"}}>
            <View>
            <Text style={{fontSize:25,fontWeight:"700"}}>Giá tốt nhất </Text>
            <Text style={{fontSize:14,fontWeight:"700"}}>từ Agoda</Text>
            </View>
            <View style={{ alignItems: 'flex-end',paddingRight: 7 }}>
              <Text style={{ fontSize: 18, fontWeight: '700', color: "#00BC9A" }}>2.370.000 VNĐ</Text>
              <Text style={{ fontSize: 11, fontWeight: '400' }}>mỗi đêm</Text>
            </View>
          </View>
      </View>
      </SafeAreaView>
    );
  }

export default Info;
const styles = StyleSheet.create({
  logo: {
    width: 66,
    height: 58,
  },
  logoImg:{
    height:345,
    width:"100%",
  },
  map: {
    height: 76,
    width: SLIDER_WIDTH,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  carouselContainer: {
    marginTop: 50
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue'
  },
  itemLabel: {
    color: 'white',
    fontSize: 24
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  allStar: {
    flexDirection: 'row',
    color: "yellow",
    paddingRight: 10
  },
  heart:{
    position:"absolute",
    zIndex:1,
    top:20,
    right:20,
    color:"#FFF"
  },
  back:{
    position:"absolute",
    zIndex:1,
    top:20,
    left:20,
    color:"#FFF"
  },
  nameRoom:{
    fontSize:20,
    fontWeight:"700",
    paddingVertical:5
  },
  seeMap:{
    position:"absolute",
    zIndex:1,
    right:0,
    bottom:0,
    color:"green",
    backgroundColor:"#FFF"
  },button:{
    height:39,
    margin: 10,
    borderRadius: 10,
    borderWidth:1,
    
  },
  title:{
    paddingTop: 10,
    paddingHorizontal: 10,
    fontWeight:"700",
    fontSize:20,
  }
});
