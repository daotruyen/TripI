import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, ScrollView, Image } from 'react-native';

import Carousel, { Pagination } from '@amazingbeerbelly/react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { scrollInterpolator, animatedStyles } from './animation';
import ListInfo from './ListInfo'

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const DATA = [];
for (let i = 0; i < 6; i++) {
  DATA.push(i)
}

export default class Info extends Component {

  state = {
    index: 0
  }

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this)
  }

  _renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <ListInfo />
      </View>
    );
  }
  get pagination() {
    const { entries, activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={6}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: 'white', marginTop: -20 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'blue'
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    )
  }
  render() {
    return (
      <View>
      <ScrollView>
        <Carousel
          ref={(c) => this.carousel = c}
          data={DATA}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}

        />
        { this.pagination}
        <View>
          <Text>Tên Khách Sạn</Text>
          <View style={{ flexDirection: 'row' }}>
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
          <View style={{ flexDirection: 'row' }}>
            <Icon name="location" size={20} style={{ fontSize: 11.06, color: "red" }} />
            <Text style={{ fontSize: 12, fontWeight: "400" }}>Địa chỉ khách sạn</Text>
          </View>
          <View style={styles.container}>
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
            <Text>Xem bản đồ</Text>
          </View>
          <View>
            <View>
              <Text>Giá tốt nhất</Text>
              <TouchableOpacity>
                <Text>Agoda</Text>
                <View style={{ alignItems: 'flex-end', }}>
                  <Text style={{ fontSize: 18, fontWeight: '700', color: "#00BC9A" }}>2.370.000 VND</Text>
                  <Text style={{ fontSize: 11, fontWeight: '400' }}>mỗi đêm</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Text>Gia khác</Text>
              <TouchableOpacity>
                <Text>Agoda</Text>
                <View style={{ alignItems: 'flex-end', }}>
                  <Text style={{ fontSize: 18, fontWeight: '700', color: "#00BC9A" }}>2.370.000 VND</Text>
                  <Text style={{ fontSize: 11, fontWeight: '400' }}>mỗi đêm</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Agoda</Text>
                <View style={{ alignItems: 'flex-end', }}>
                  <Text style={{ fontSize: 18, fontWeight: '700', color: "#00BC9A" }}>2.370.000 VND</Text>
                  <Text style={{ fontSize: 11, fontWeight: '400' }}>mỗi đêm</Text>
                </View>
              </TouchableOpacity>
              <Text>Xem thêm</Text>

            </View>
            <View>
              <Text>Tiện ích, dịch vụ</Text>
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name="fast-food" />
                  <Text>Dịch vụ abc</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name="fast-food" />
                  <Text>Dịch vụ abc</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name="fast-food" />
                  <Text>Dịch vụ abc</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name="fast-food" />
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
          <View style={{flexDirection:'row',justifyContent:'space-between',position: 'absolute', left: 0, right: 0, bottom: 0}}>
            <View>
            <Text>Giá tốt nhất </Text>
            <Text>từ Agoda</Text>
            </View>
            <View>
              <Text>2.370.000 VNĐ</Text>
              <Text>mỗi đêm</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{flexDirection:'row',justifyContent:'space-between',position: 'absolute', left: 0, right: 0, bottom: 0}}>
            <View>
            <Text>Giá tốt nhất </Text>
            <Text>từ Agoda</Text>
            </View>
            <View>
              <Text>2.370.000 VNĐ</Text>
              <Text>mỗi đêm</Text>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 66,
    height: 58,
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
});
