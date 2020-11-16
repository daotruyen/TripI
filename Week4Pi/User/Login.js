import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';




export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:"",
      password:"",
      checkLogin:0
    }
  }
  _onSubmit=()=>{
    return fetch('http://10.0.2.2:8888/user/login', { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    	body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then((response) => response.json())
	  .then((responseJson) => {
        this.setState({checkLogin:responseJson.success});
        if(this.state.checkLogin>0){
            //console.warn(responseJson);
            console.log("Thông báo!","Bạn đã đăng nhập thành công!");
        }
        else{
           // console.warn(responseJson);
           console.log("Thông báo!","Bạn đã đăng nhập không thành công!");
        }
    })
    .catch((error) =>{
        console.error(error);
    });
  }
    
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.up}>
          <Text style={styles.title}>Pi</Text>
        </View>

        <View style={styles.down}>

          <View style={styles.TextInputContainer}>
            <Icon style={styles.Icon}
              name='call-outline'
              size={20}
            />
            <TextInput
            style={styles.textInput}
            textContentType='emailAddress'
            keyboardType='email-address'
            placeholder='Email'
            keyboardAppearance='default'
            onChangeText={(username) => this.setState({username:username})}
            />
          </View>

          <View style={styles.TextInputContainer}>
            <Icon style={styles.Icon}
            name='lock-closed-outline'
            size={20}
            />

            <TextInput
            style={styles.textInput}
            placeholder='PassWord'
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password:password})}
            />
          </View>

          <TouchableOpacity
          style={styles.ForgotPasswordButton}
          >
            <Text style={{color:'#FF0000'}}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.LoginButton}
          onPress={this._onSubmit}
          >
            <Text style={styles.LoginButtonTitle}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.SignUpButton}>
            <Text style={styles.SignUpButtonTitle}>SIGN UP</Text>
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
    color: '#00A79C',
    fontFamily: 'Rationale',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  TextInputContainer:{
    flexDirection:'row',
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: 'rgba(225,225,225,0.0)',
  },
  Icon:{
    backgroundColor:'rgba(74, 184, 177, 0.49)',
    borderRadius:999,
    paddingLeft: 5,
    paddingTop:5,
    width: 30,
    height: 30,
    margin: 10,
    position:"absolute",

  },
  textInput:{
    width: 280,
    height: 45,
    borderBottomColor: '#C9CFDF',
    borderBottomWidth: 1,
    paddingLeft:50
  },
  ForgotPasswordButton:{
    marginTop: 10,
    alignSelf:'flex-end',
    marginRight: 60,
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
  SignUpButton:{
    width: 300,
    height: 45,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10,
    marginTop: 20,
    borderColor:'#00A79C',
    borderWidth:1,
    
  },
  LoginButtonTitle:{
    fontFamily:'Roboto Slab',
    fontStyle:'normal',
    fontSize: 18,
    color: 'white',
    lineHeight: 21,
    fontWeight:'bold'
  },
  SignUpButtonTitle:{
    fontFamily:'Roboto Slab',
    fontStyle:'normal',
    fontSize: 18,
    color: '#00A79C',
    lineHeight: 21,
    fontWeight:'bold'
  }
})