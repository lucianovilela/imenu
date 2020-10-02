import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import PageRestaurante from './pages/PageRestaurante';
import PageLogin from './pages/PageLogin';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './pages/Styles';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Cadastro_Menu"
          component={PageRestaurante}
          options={{ title: 'Cadastro de Restaurante' }}
        />
        <Stack.Screen
          name="Login"
          component={PageLogin}
          options={{
            title: 'Login',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
