import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import styles from './Styles';

import Botao from '../components/Botao';

const PageLogin = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.containerLogin}>
        <Image
          style={styles.loginImg}
          source={require('../assets/user-image-with-black-background.png')}
        />
        <TextInput style={styles.textInput} placeholder="email" />
        <TextInput
          style={styles.textInput}
          placeholder="senha"
          secureTextEntry
        />
        <Botao style={styles.buttonLogin} onPress={() => {
            navigation.navigate('Cadastro_Menu');
          }} title="Login"/>
          
        <Botao style={styles.buttonGoogle} onPress={() => {
            navigation.navigate('Cadastro_Menu');
          }} title="Google"/>

      </View>
    </SafeAreaView>
  );
};



export default PageLogin;
