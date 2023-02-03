import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import OnBoardingScreen from './screens/onBoardingScreen';

import FormScreen from './src/screens/FormScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import ShowData from './src/screens/ShowData';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="Data" component={ShowData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
