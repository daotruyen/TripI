import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
  {label: 'Nam', value: 0 },
  {label: 'Nữ', value: 1 },
  {label: 'Khác', value: null}
];

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
                <Image
                  source={require('./avatar/avt1.jpg')}
                  // source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpetmaster.vn%2Fpetroom%2Fcho-canh%2Fhusky%2F&psig=AOvVaw3iZQbh38GiWB3W3QEwJHM4&ust=1604600655141000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjC9LPB6ewCFQAAAAAdAAAAABAD'}}
                  style={styles.avatar}
                />
              </View>
              <View style={styles.down}>
                <View style={styles.down1}>
                  <Text style={styles.title1}>Họ và tên</Text>
                  <TextInput
                    style={styles.textInput}
                    textContentType='name'
                    keyboardType='default'
                    placeholder='Họ và tên'
                    keyboardAppearance='default'
                    >
                  </TextInput>
                  <Text style={styles.title1}>Giới tính</Text>
                  <RadioForm
                    style={{marginLeft: 20,}}
                    radio_props={radio_props}
                    formHorizontal={true}
                    labelHorizontal={false}
                    initial={0}
                    onPress={(value) => {this.setState({value:value})}}
                  />
                  <Text style={styles.title1}>Địa chỉ</Text>
                  <TextInput
                    style={styles.textInput}
                    textContentType='addressCity'
                    keyboardType='default'
                    placeholder='Địa chỉ'
                    keyboardAppearance='default'
                    >
                  </TextInput>
                </View>
                <View style={styles.down2}>
                  <Text style={styles.title1}>Email</Text>
                  <TextInput
                    style={styles.textInput}
                    textContentType='name'
                    keyboardType='email-address'
                    placeholder='Email'
                    keyboardAppearance='default'
                    >
                  </TextInput>
                  <Text style={styles.title1}>Số điện thoại</Text>
                  <TextInput
                    style={styles.textInput}
                    textContentType='telephoneNumber'
                    keyboardType='numeric'
                    placeholder='Số điện thoại'
                    keyboardAppearance='default'
                    >
                  </TextInput>
                </View>
              </View>
              <View style={styles.bot}>
                <TouchableOpacity style={styles.updateButton}>
                  <Text style={{fontSize: 23, color:'white'}}>Cập Nhật</Text>
                </TouchableOpacity>
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
        // backgroundColor:'#9DD6D2',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    up:{
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: '#9DD6D2',
        alignItems: 'center',
        justifyContent: 'center',
      },
    down:{
      flex: 6.5,
      flexDirection: 'column',
      backgroundColor: 'white',
      borderRadius: 50,
    },
    down1:{
      flex: 3,
      backgroundColor:'white',
      borderRadius: 50,
      justifyContent:'flex-start',
      alignItems:'flex-start',
      marginTop: 50,
      // marginLeft: 20,
    },
    down2:{
      flex: 2,
      backgroundColor:'white',
      justifyContent:'flex-start',
      alignItems:'flex-start',
      // marginLeft: 20,
    },
    bot:{
      flex: 2,
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center',
    },
    title:{
      fontSize: 23,
      color:'white',
      marginTop:10,
    },
    icon:{
      flex: 1,
    },
    avatar:{
      height: 110,
      width: 110,
      // position:"absolute",
      zIndex:1,
      marginTop:50,
      borderRadius: 50,
    },
    title1:{
      marginLeft: 20,
      fontSize: 13,
      // color:'#A2A8B6',
    },
    textInput:{
      width: 370,
      height: 45,
      backgroundColor: 'rgba(225,225,225,0.2)',
      marginLeft: 20,
    },
    updateButton:{
      width: 300,
      height: 45,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00A79C',
      marginTop: 10,
    },
})