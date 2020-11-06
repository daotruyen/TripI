/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './User/Login';

AppRegistry.registerComponent(appName, () => Login);
