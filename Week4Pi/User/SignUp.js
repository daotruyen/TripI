import React, { Component,setState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const radio_props = [
    {label: 'Nam', value: 0 },
    {label: 'Nữ', value: 1 },
    {label: 'Khác', value: null}
  ];
  
const SignUp = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }
    const [value,setValue]=React.useState('');
        return(
            <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>Đăng ký</Text>

                <View style={styles.textInputContainer}>
                    <Text style={styles.textInputTitle}>Tên đăng nhập</Text>

                    <TextInput
                    style={styles.textInput}
                    textContentType='username'
                    keyboardType='default'
                    placeholder='Tên đăng nhập'
                    keyboardAppearance='default'/>
                </View>

                <View style={styles.textInputContainer}>
                    <Text style={styles.textInputTitle}>Email</Text>

                    <TextInput
                    style={styles.textInput}
                    textContentType='emailAddress'
                    keyboardType='email-address'
                    placeholder='Email'
                    keyboardAppearance='default'/>
                </View>

                <View style={styles.textInputContainer}>
                    <Text style={styles.textInputTitle}>Mật khẩu</Text>

                    <TextInput
                    style={styles.textInput}
                    textContentType='password'
                    secureTextEntry={true}
                    keyboardType='default'
                    placeholder='Mật khẩu'                        
                    keyboardAppearance='default'/>
                </View>

                <View style={styles.textInputContainer}>
                    <Text style={styles.textInputTitle}>Nhập lại mật khẩu</Text>

                    <TextInput
                    style={styles.textInput}
                    textContentType='password'
                    secureTextEntry={true}
                    keyboardType='default'
                    placeholder='Nhập lại mật khẩu'
                    keyboardAppearance='default'/>
                </View>
                <View style={styles.textInputContainer}>
                    <Text style={styles.textInputTitle}>Giới tính</Text>

                    <RadioForm
                    style={styles.RadioForm}
                    buttonColor={'black'}
                    radio_props={radio_props}
                    formHorizontal={true}
                    labelHorizontal={false}
                    initial={0}
                    onPress={(value) => {setValue(value)}}
                    labelColor={'black'}
                    selectedButtonColor={'black'}
                    buttonSize={13}/>
                </View>

                <TouchableOpacity style={styles.SignUpButton}>
                    <Text style={styles.text}>ĐĂNG KÝ</Text>
                </TouchableOpacity>
            </View>

            </SafeAreaView>
        )
    }
export default SignUp;
const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        alignItems:'center',
        // justifyContent:'center'
    },
    title:{
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#00A79C'
    },
    textInputContainer:{
        marginTop: 50,
        borderRadius: 6,
        backgroundColor: 'rgba(225,225,225,0)',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        height: 40,
        borderRadius: 5,
    },
    textInput:{
        width: 280,
        height: 45,
        borderBottomColor: '#C9CFDF',
        borderBottomWidth: 1,
    },
    textInputTitle:{
        fontWeight: 'bold',
    },
    RadioForm:{
        marginRight: 160,
        marginTop: 10,
    },
    SignUpButton:{
        marginTop: 100,
        backgroundColor:'#00A79C',
        width: 280,
        height: 45,
        borderRadius: 50,
        alignItems:'center',
        justifyContent: 'center'
    },
    text:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
})