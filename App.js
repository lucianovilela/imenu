import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import Constants from 'expo-constants';
import PageRestaurante from './pages/PageRestaurante';
import PageLogin from './pages/PageLogin';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={PageLogin}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Cadastro de Menu"
          component={PageRestaurante}
          options={{ title: 'Cadastro de Menu' }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

