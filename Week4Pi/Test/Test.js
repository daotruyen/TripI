import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const MyButton =()=> (
    <Icon.Button
      name="facebook"
      backgroundColor="#3b5998"
      onPress={this.loginWithFacebook}
    >
      Login with Facebook
    </Icon.Button>
  );
export default MyButton;