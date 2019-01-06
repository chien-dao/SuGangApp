import React from 'react';
import SignInScreen from './SignIn';
import SignUpScreen from './SignUp';
import {
  createAppContainer,
  createMaterialTopTabNavigator,
  TabBarTop,
} from 'react-navigation';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const getGradient = (title, left) => (
  <View style={[left ?
    {
      borderLeftWidth: 0.5,
      borderLeftColor: '#ddd',
    } : {
      borderRightWidth: 0.5,
      borderRightColor: '#ddd',
    }, {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    position: 'relative',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  }]}>
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#665EFF', '#5773FF', '#3497FD', '#3ACCE1']}
      locations={[0, 0.25, 0.5, 0.75]}
      style={{
        position: 'absolute',
        width: '100%',
        flex: 1,
        height: 2,
        left: 0,
        bottom: 0
      }}
    >
    </LinearGradient>
    <Text style={{textAlign: 'center'}}>{title}</Text>
  </View>
)

export default createAppContainer(createMaterialTopTabNavigator(
  {
    SignIn: {
      screen: SignInScreen,
      navigationOptions: {
        tabBarLabel: ({ focused }) => (
          focused ?
          getGradient('Sign In', false)
          :
          <Text>
            Sign In
          </Text>
        ),
      },
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        tabBarLabel: ({ focused }) => (
          focused ?
          getGradient('Sign Up', true)
          :
          <Text>
            Sign Up
          </Text>
        ),
      },
    }
  },
  {
    tabBarComponent: TabBarTop,
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: '#ddd',
      tabStyle: {
        position: 'relative',
        display: 'flex',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        padding: 0,
        margin: 0,
        elevation: 0,
      },
      indicatorStyle: {
        backgroundColor: 'transparent'
      },
      style: {
        backgroundColor: '#fff',
        paddingTop: 50,
      }
    },
    swipeEnabled: false,
  }
));
