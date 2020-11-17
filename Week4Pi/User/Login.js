import React, {useState, useContext}from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../Test/Context';
import Users from './DataUser';
//import {Context as AuthContext} from '../Test/AuthContext';

const Login = ({navigation}) => {
  const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
      if( val.trim().length >= 4 ) {
          setData({
              ...data,
              username: val,
              check_textInputChange: true,
              isValidUser: true
          });
      } else {
          setData({
              ...data,
              username: val,
              check_textInputChange: false,
              isValidUser: false
          });
      }
  }

  const handlePasswordChange = (val) => {
    if( val.trim().length >= 8 ) {
        setData({
            ...data,
            password: val,
            isValidPassword: true
        });
    } else {
        setData({
            ...data,
            password: val,
            isValidPassword: false
        });
    }
}

const updateSecureTextEntry = () => {
  setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
  });
}

const handleValidUser = (val) => {
  if( val.trim().length >= 4 ) {
      setData({
          ...data,
          isValidUser: true
      });
  } else {
      setData({
          ...data,
          isValidUser: false
      });
  }
}

//requestAPI

const loginHandle = (userName, password) => {

  const foundUser = Users.filter( item => {
      return userName == item.username && password == item.password;
  } );

  if ( data.username.length == 0 || data.password.length == 0 ) {
      Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
          {text: 'Okay'}
      ]);
      return;
  }

  if ( foundUser.length == 0 ) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
          {text: 'Okay'}
      ]);
      return;
  }
  signIn(foundUser);
}

   console.log(useContext(AuthContext));

const Divider = (props) => {
  return <View {...props}>
    <View style={styles.line}/>
    <Text style={styles.text}>HOẶC</Text>
    <View style={styles.line}/>
  </View>
}
    return (
      <View style={styles.container}>

        <View style={styles.up}>
          <Text style={styles.title}>Pi</Text>
        </View>

        <View style={styles.down}>
          <View style={styles.TextInputContainer}>
            <Icon
                name='mail'
                size={19}
                style={styles.IconStyle}
            />

            <TextInput
            style={styles.textInput}
            textContentType='emailAddress'
            keyboardType='email-address'
            placeholder='          Email'
            keyboardAppearance='default'
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
            />

            {data.check_textInputChange ? 
                <View>
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </View>
                : null}

          </View>

          <View style={styles.TextInputContainer}>
            <Icon
                name='lock'
                size={19}
                style={styles.IconStyle}
            />

            <TextInput
            style={styles.textInput}
            placeholder='          Mật Khẩu'
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
            />
          </View>

          { data.isValidPassword ? null : 
            <View >
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </View>
            }

          <TouchableOpacity style={styles.forgotPassButton}>
            <Text style={styles.forgotPass}>Quên mật khẩu ?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.LoginButton}
           title="Sign in" 
           onPress={() => {loginHandle( data.username, data.password )}}
          >
            <Text style={styles.LoginButtonTitle}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>

          <Divider style={styles.Divider}></Divider>

          <TouchableOpacity style={styles.SignUpButton}
          onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.SignUpButtonTitle}>ĐĂNG KÝ</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  export default Login ;

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
    fontWeight: 'bold',
  },
  TextInputContainer:{
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: 'rgba(225,225,225,0)',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 40,
    borderRadius: 5,
  },
  textInput:{
    width: 280,
    height: 45,
    borderBottomColor: '#C9CFDF',
    borderBottomWidth: 1,
  },
  IconStyle:{
    padding: 10,
    margin: 5,
    position: 'absolute',
  },
  LoginButton:{
    width: 300,
    height: 45,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00A79C',
    marginTop: 30,
  },
  SignUpButton:{
    width: 300,
    height: 45,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#00A79C',
    marginTop: 5,
  },
  forgotPassButton:{
    marginTop: 20,
    alignSelf: 'flex-end',
    marginRight: 60,
  },
  LoginButtonTitle:{
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  SignUpButtonTitle:{
    fontSize: 18,
    color: '#00A79C',
    fontWeight: 'bold',
  },
  forgotPass:{
    color:'red',
    fontWeight: 'bold',
  },
  line:{
    height: 2,
    flex: 2,
    backgroundColor: 'black'
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    // fontWeight: 'bold',
  },
  Divider: {
    flexDirection: 'row',
    width: 300,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  }
});
