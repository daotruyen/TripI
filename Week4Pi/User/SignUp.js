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

export default class SignUp extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.top}>
                <Icon name="left" size={10} style={{paddingTop:4,paddingStart:2}}
                    onPress={console.log("clicked")}
                />
                </View>
                <View style={styles.up}>
                    <Text style={{color:'green', fontSize: 23, fontFamily:'Roboto Slab', fontStyle:'normal'}}>ĐĂNG KÝ</Text>
                </View>
                <View style={styles.down}>
                    <Text style={{fontSize: 14,}}>Vui lòng điền số điện thoại vào ô bên dưới</Text>
                    <Text style={{fontSize: 14,}}>Chúng tôi sẽ gửi mã OTP đến số điện thoại của bạn để kích hoạt</Text>
                </View>
                <View style={styles.bot}>
                    <TextInput
                        style={styles.textInput}
                        keyboardType='numeric'
                        placeholder='Nhập số điện thoại'
                    />
                    <TouchableOpacity 
                        style={styles.SignUpButton}
                        onPress={console.log("clicked")}
                    >
                        <Text style={{color:'white'}}>GỬI</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'white',
    },
    top:{
        flex: 1,
        // backgroundColor:'red',
        flexDirection: 'row',
    },
    up:{
        flex: 2,
        flexDirection: 'column',
        // backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
      },
      down:{
        flex: 2,
        flexDirection: 'column',
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
      },
      bot:{
          flex: 5,
        //   backgroundColor: 'orange',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
      },
      textInput:{
        width: 280,
        height: 45,
      },
      SignUpButton:{
        width: 300,
        height: 45,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00A79C',
        marginTop: 10,
      },
})