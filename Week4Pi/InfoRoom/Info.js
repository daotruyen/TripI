import React, { useEffect} from 'react';
import { Text, View, Dimensions, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

import Carousel, { Pagination } from '@amazingbeerbelly/react-native-snap-carousel';
import ListInfo from './ListInfo'
import Icon from 'react-native-vector-icons/Ionicons';
import { scrollInterpolator, animatedStyles } from './animation';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { get } from 'lodash';
import Stars from 'react-native-stars';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);


const Info = ({ navigation, route }) => {

  const data = get(route, 'params.data', null);
  console.log (data.hotel_id)
  //console.log(info.hotel.hotel_price[0])
  const [info,setInfo] = React.useState([]);
  console.log("info",info)
  const [heart, setHeart] = React.useState(false)

  useEffect(() => {
    fetch(`https://tripiii.herokuapp.com/api/hotels/${data.hotel_id}`,)
      .then((res) => res.json())
      .then((responseData) => {
        console.log('a', responseData);
        setInfo(responseData.data.hotel)
        console.log('dagdasdasshvdjaskk',responseData.data.hotel)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <View>
            <Icon name="heart-circle-outline" size={40} style={styles.heart} />
            <Image source={{ uri: get(info, 'logo', '') }} style={styles.logoImg} />
            <Icon name="chevron-back-outline" size={40} style={styles.back}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View>
            <View style={{ paddingLeft: 10 }}>
              <Text style={styles.nameRoom}>{get(info, 'root_name', '')}</Text>
              <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                <View style={styles.allStar}>
                <Stars
                    default={get(info,'star_number','0')}
                    count={5}
                    half={true}
                    starSize={15} 
                    fullStar={<Icons name={'star'} style={[styles.myStarStyle]}/>}
                    emptyStar={<Icons name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                    halfStar={<Icons name={'star-half'} style={[styles.myStarStyle]}/>}
                />
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name="md-chatbox-ellipses" size={20} style={{ fontSize: 11.06, color: "red" }} />
                  <Text style={{ fontSize: 12, fontWeight: "400" }}>{get(info,'number_of_reviews','')} Đánh giá</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', paddingBottom: 5, }}>
                <Icon name="location" size={20} style={{ fontSize: 11.06, color: "red" }} />
                <Text style={{ fontSize: 12, fontWeight: "400" }}>{get(info, 'root_address','')}</Text>
              </View>
            </View>
            <View style={styles.container}
              onStartShouldSetResponder={() => navigation.navigate('Maps',
                {
                  latitude: get(info, 'latitude',''),
                  longitude: get(info, 'longitude',''),
                  data:info
                }
              )}>

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
                  coordinate={{ latitude: get(data, 'latitude',''), longitude: get(data, 'longitude','')}}
                  title={'Sys Homestay'}
                ></Marker>
              </MapView>
              <Text style={styles.seeMap}>Xem bản đồ</Text>
            </View>
            <View>
              <View >
                <Text style={styles.title} >Giá tốt nhất</Text>
                <TouchableOpacity style={styles.button}>
              <Text style={{ position: "absolute", padding: 8, fontSize: 15, fontWeight: "700" }}>{get(data,'name','')}</Text>
                  <View style={{ alignItems: 'flex-end', paddingRight: 7 }}>
              <Text style={{ fontSize: 18, fontWeight: '700', color: "#00BC9A" }}>0 VNĐ</Text>
                    <Text style={{ fontSize: 11, fontWeight: '400' }}>mỗi đêm</Text>
                  </View>
                </TouchableOpacity>
              </View>
              
              <View style={styles.dichvu}>
                <Text style={{ fontSize: 15, fontWeight: "700" }}>Tiện ích, dịch vụ</Text>
                <View style={{ flexDirection: 'column', alignContent: "stretch", width: 200 }}>
                  <View style={{ flexDirection: 'row', width: "50%", height:get(info,'night_club')==1?30:0}}>
                    <Icon name="fast-food" size={20} />
                    <Text>câu lạc bộ đêm</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: "50%",height:info.relax_spa==1?30:0 }}>
                    <Icon name="fast-food" size={20} />
                    <Text>spa thư giãn</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: "50%",height:info.relax_massage==1?30:0 }}>
                    <Icon name="fast-food" size={20} />
                    <Text>mát xa thư giãn</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: "50%", height:info.relax_steam_room==1?30:0}}>
                    <Icon name="fast-food" size={20} />
                    <Text>mát xa thư giãn</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: "50%", height:info.relax_outdoor_room==1?30:0}}>
                    <Icon name="fast-food" size={20} />
                    <Text>phòng thư giãn ngoài trời</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: "50%", height:info.relax_outdoor_pool==1?30:0}}>
                    <Icon name="fast-food" size={20} />
                    <Text>bể bơi ngoài trời</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: "50%", height:info.relax_sauna==1?30:0}}>
                    <Icon name="fast-food" size={20} />
                    <Text>tắm hơi thư giãn</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: "50%", height:info.relax_pool==1?30:0}}>
                    <Icon name="fast-food" size={20} />
                    <Text>bể bơi thư giãn</Text>
                  </View>
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: "#fff" }}>
          <View>
            <Text style={{ fontSize: 25, fontWeight: "700" }}>Giá tốt nhất </Text>
            <Text style={{ fontSize: 14, fontWeight: "700" }}>từ Agoda</Text>
          </View>
          <View style={{ alignItems: 'flex-end', paddingRight: 7 }}>
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
  logoImg: {
    height: 345,
    width: "100%",
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
  heart: {
    position: "absolute",
    zIndex: 1,
    top: 20,
    right: 20,
    color: "#FFF"
  },
  back: {
    position: "absolute",
    zIndex: 1,
    top: 20,
    left: 20,
    color: "#FFF"
  },
  nameRoom: {
    fontSize: 20,
    fontWeight: "700",
    paddingVertical: 5
  },
  seeMap: {
    position: "absolute",
    zIndex: 1,
    right: 0,
    bottom: 0,
    color: "green",
    backgroundColor: "#FFF"
  }, button: {
    height: 39,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,

  },
  title: {
    paddingTop: 10,
    paddingHorizontal: 10,
    fontWeight: "700",
    fontSize: 20,
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
