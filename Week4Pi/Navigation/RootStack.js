import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

//import SplashScreen from './SplashScreen';
import Login from '../User/Login';
import SignUp from '../User/SignUp';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        
        <RootStack.Screen name="SignIn" component={Login}/>
        <RootStack.Screen name="SignUp" component={SignUp}/>
    </RootStack.Navigator>
);

export default RootStackScreen;