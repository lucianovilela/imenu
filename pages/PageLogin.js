import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image
} from 'react-native';
import Constants from 'expo-constants';

const PageLogin = ({ navigation }) => {
  return (
      <View style={styles.view}>
        <Image
          style={styles.login}
          source={require('../assets/user-image-with-black-background.png')}
        />
        <TextInput style={styles.textField} placeholder="login" />
        <TextInput
          style={styles.textField}
          placeholder="Senha"
          secureTextEntry
        />

        <Button
          title="Login"
          onPress={() => {
            navigation.navigate('Cadastro de Menu');
          }}
        />
        <Button
          title="Facebook"
          onPress={() => {
            navigation.navigate('Cadastro de Menu');
          }}
        />
        <Button
          title="Google"
          onPress={() => {
            navigation.navigate('Cadastro de Menu');
          }}
        />


      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  login: {
    height: 50,
    width: 50,
  },
  textField: {
    margin: 10,
  },
  view: { alignItems: 'center', justifyContent: 'center', flex: 1 },
});

export default PageLogin;
