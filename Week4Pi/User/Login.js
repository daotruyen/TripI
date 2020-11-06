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
            <TextInput
            style={styles.textInput}
            textContentType='emailAddress'
            keyboardType='email-address'
            placeholder='Email'
            keyboardAppearance='default'
            onChangeText={(username) => this.setState({username:username})}
            >
            </TextInput>
          </View>
          <View style={styles.TextInputContainer}>
            <TextInput
            style={styles.textInput}
            placeholder='PassWord'
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password:password})}
            >
            </TextInput>
          </View>
          <TouchableOpacity>
            <Text>Quên mật khẩu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.LoginButton}
            onPress={this._onSubmit}
          >
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