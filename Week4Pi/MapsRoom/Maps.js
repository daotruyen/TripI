import React, { Component, useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, Dimensions, ScrollView,
  Animated,
  Image,
} from 'react-native';
import HeaderMap from './HeaderMap'
import DetailItem from '../Detail/DetailItem'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { makers } from './MapData'
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get("window")
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;



const Maps = () => {
  const initMap = {
    makers,
    region: {
      latitude: 45.52220671242907,
      longitude: -122.6653281029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },

  };
  const [state, setState] = useState(initMap);
  const _map = React.useRef(null);
  const _ScrollView = React.useRef(null);
  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);
  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if (index > state.makers.length) {
        index = state.makers.length - 1;
      }
      if (index < 0) {
        index = 0;
      }
      clearTimeout(regionTImeout);
      const regionTImeout = setTimeout(() => {
        if (mapIndex != index) {
          mapIndex = index;
          const { coordinate } = state.makers[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: state.region.latitudeDelta,
              longitudeDelta: state.region.longitudeDelta,
            }
          )
        }
      })
    })
  })

  return (
    <View style={styles.container}>
      <HeaderMap style={styles.header}/>
      <MapView
        ref={_map}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.container}
        region={state.region}
      >
        {
          state.makers.map((makers,index)=>{
            return(
              <Marker
                key={index}
                coordinate={makers.coordinate}
              >

              </Marker>
            )
          })
        }
      </MapView>
      <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        style={styles.scorllView}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                }
              }
            }
          ]
        )}
      >
        {state.makers.map((makers, index) => (
          <DetailItem key={index} />
        ))}
      </ScrollView>
    </View>
  );
}
export default Maps;

const styles = StyleSheet.create({
  container: { height: '100%' },
  ca: {
    position: 'absolute',
    zIndex: 1
  },
  scorllView: {
    position:"absolute",
    zIndex:1,
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {

    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {

    padding: 10,
  },
  cardtitle: {
    fontSize: 12
  },
  makersWrap: {
    alignItems: 'center',
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  makers: { width: 30, height: 30, },
  header:{position:"absolute",zIndex:-1}
});
