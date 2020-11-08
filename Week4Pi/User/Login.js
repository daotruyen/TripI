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
import { AuthContext } from '../Test/Context';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.up}>
          <Text style={styles.title}>Pi</Text>
        </View>
        <View style={styles.down}>
          <View style={styles.TextInputContainer}>
            <TextInput
            style={styles.textInput}
            textContentType='emailAddress'
            keyboardType='email-address'
            placeholder='Email'
            keyboardAppearance='default'
            >
            </TextInput>
          </View>
          <View style={styles.TextInputContainer}>
            <TextInput
            style={styles.textInput}
            placeholder='PassWord'
            secureTextEntry={true}
            >
            </TextInput>
          </View>
          <TouchableOpacity>
            <Text>Quên mật khẩu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.LoginButton}>
            <Text style={styles.LoginButtonTitle}>LOGIN</Text>
          </TouchableOpacity>
          <Text>Hoặc</Text>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
              <Text style={{backgroundColor:'white', marginTop:10}}>FACEBOOK</Text>
            </TouchableOpacity>
            <Text>     </Text>
            <TouchableOpacity>
              <Text style={{backgroundColor:'white', marginTop:10}}>GOOGLE</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.LoginButton}>
            <Text style={styles.LoginButtonTitle}>REGISTER</Text>
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
  up:{
    flex: 3,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  down:{
    flex: 7,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title:{
    flex: 1,
    fontSize: 100,
    color: 'green',
  },
  TextInputContainer:{
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: 'rgba(225,225,225,0.5)',
  },
  textInput:{
    width: 280,
    height: 45,
  },
  LoginButton:{
    width: 300,
    height: 45,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00A79C',
    marginTop: 10,
  },
  LoginButtonTitle:{
    fontSize: 18,
    color: 'black',
  }
})