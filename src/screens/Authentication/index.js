import React from 'react';
import SignInScreen from './SignIn';
import SignUpScreen from './SignUp';
import {
  createAppContainer,
  createMaterialTopTabNavigator,
} from 'react-navigation';

export default createAppContainer(createMaterialTopTabNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
  },
  {
    tabBarPosition: 'top',
  }
));
