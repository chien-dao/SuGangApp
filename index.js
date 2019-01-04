/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import Authentication from './src/screens/Authentication';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Authentication);
