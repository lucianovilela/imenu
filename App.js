import * as React from "react";
import Constants from "expo-constants";
import PageRestaurante from "./pages/PageRestaurante";
import PageLogin from "./pages/login/AuthScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthProvider } from "./provider/AuthProvider";

import styles from "./pages/Styles";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator initialRouteName="Cadastro_Menu">
          <Stack.Screen
            name="Cadastro_Menu"
            component={PageRestaurante}
            options={{ title: "Cadastro de Restaurante" }}
          />
          <Stack.Screen
            name="Login"
            component={PageLogin}
            options={{
              title: "Login",
            }}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
