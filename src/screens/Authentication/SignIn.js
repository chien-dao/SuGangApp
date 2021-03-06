import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import firebase from 'react-native-firebase';
import styles from './styles';
import BackgroundImg from '../../assets/images/background-authen.png';

export default class SignInScreen extends Component {
  state = {
    email: '',
    password: ''
  }

  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => console.log(user))
      .catch(err => console.log(err))
  }

  render() {
    return (
    <View style={styles.container}>
      <Image
        source={BackgroundImg}
        style={styles.imgBackground}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={input => this.setState({ email: input })}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        onChangeText={input => this.setState({ password: input })}
      />
      <Button
        title="Sign In"
        onPress={this.handleLogin}
      />
    </View>
    )
  }
};
