import React from 'react'

import LoginScreen from "./src/screens/LoginScreen";
import CadastroLoginScreen from "./src/screens/CadastroLoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import HistoricoScreen from "./src/screens/HistoricoScreen";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }} />
        <Stack.Screen
          name="CadastroLogin"
          component={CadastroLoginScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }} />
        <Stack.Screen
          name="Historico"
          component={HistoricoScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

