import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class UserProfile extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.icon}>
                      <Icon
                          name = 'left'
                          size={20}
                          style={{paddingTop:4,paddingStart:2}}
                          onPress={console.log('clicked')}
                      />
                    </View>
                    <Text style={styles.title}>Thông tin cá nhân</Text>
                    <View style={styles.icon}></View>
                </View>
                <View style={styles.up}>

                </View>
                <View style={styles.down}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      // marginTop: StatusBarHeight,
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#9DD6D2',
    },
    top:{
        flex: 0.5,
        backgroundColor:'#9DD6D2',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    up:{
        flex: 1.5,
        flexDirection: 'column',
        backgroundColor: '#9DD6D2',
        alignItems: 'center',
        justifyContent: 'center',
      },
      down:{
        flex: 8,
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
      },
      title:{
        // flex: 8,
        // justifyContent: 'center',
        // alignItems: 'center'
      },
      icon:{
        flex: 1,
      },
})