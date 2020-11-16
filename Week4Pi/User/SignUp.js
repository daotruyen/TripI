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
                <Text>Đăng ký</Text>
                <View>
                    <Text>Tên đăng nhập</Text>
                    <TextInput
                    style={styles.textInput}
                    textContentType='emailAddress'
                    keyboardType='email-address'
                    placeholder='Email'
                    keyboardAppearance='default'>

                    </TextInput>
                </View>
                <View>
                    <Text>Email</Text>
                    <TextInput
                    style={styles.textInput}
                    textContentType='emailAddress'
                    keyboardType='email-address'
                    placeholder='Email'
                    keyboardAppearance='default'>

                    </TextInput>
                </View>
                <View>
                    <Text>Password</Text>
                    <TextInput
                    style={styles.textInput}
                    textContentType='emailAddress'
                    keyboardType='email-address'
                    placeholder='Email'
                    keyboardAppearance='default'>
                   
                    </TextInput>
                    
                </View>
                <View>
                    <Text>Re-type Password</Text>
                    <TextInput
                    style={styles.textInput}
                    textContentType='emailAddress'
                    keyboardType='email-address'
                    placeholder='Email'
                    keyboardAppearance='default'>

                    </TextInput>
                </View>
                <View>
                    <Text>Giới tính</Text>
                    <RadioForm
                    style={{marginLeft: 20,}}
                    radio_props={radio_props}
                    formHorizontal={true}
                    labelHorizontal={false}
                    initial={0}
                    onPress={(value) => {setValue(value)}}
                  />
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>Resgister</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </SafeAreaView>
        )
    }
export default SignUp;
const styles = StyleSheet.create({
    textInput:{
        width: 280,
        height: 45,
      },
})