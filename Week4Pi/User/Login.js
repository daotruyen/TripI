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
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
            >
            </TextInput>
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
            <TextInput
            style={styles.textInput}
            placeholder='PassWord'
            secureTextEntry='true'
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
            >
            </TextInput>
          </View>
          { data.isValidPassword ? null : 
            <View >
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </View>
            }
          <TouchableOpacity>
            <Text>Quên mật khẩu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.LoginButton}
           title="Sign in" 
           onPress={() => {loginHandle( data.username, data.password )}}
          
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
          <TouchableOpacity style={styles.LoginButton}
          onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.LoginButtonTitle}>REGISTER</Text>
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
});
