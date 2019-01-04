import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import BackgroundImg from '../../assets/images/background-authen.png';

const SignUpScreen = () => (
  <View style={styles.container}>
    <Image
      source={BackgroundImg}
      style={styles.imgBackground}
    />
    <TextInput
      style={styles.textInput}
      placeholder="Username"
    />
    <TextInput
      style={styles.textInput}
      placeholder="Password"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    position: 'relative'
  },
  textInput: {
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 18,
    elevation: 10,
    backgroundColor: '#ffffff',
  },
  imgBackground: {
    width: 420,
    height: 420,
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: [
      { translateY: -210 },
      { translateX: 210 }
    ],
  }
});

export default SignUpScreen;