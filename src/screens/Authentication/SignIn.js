import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

const SignInScreen = () => (
  <View style={styles.container}>
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundImage: 'url(src/assets/background-authen.png)',
  },
  textInput: {
    width: 327,
    height: 52,
    borderRadius: 12,
    boxShadow: '0 4 18 rgba(69,91,99,0.08)',
    backgroundColor: '#ffffff',
  }
});

export default SignInScreen;