import React, { useEffect } from 'react';
import {Text,SafeAreaView} from 'react-native';
import Splash from '../MyApp2/src/screen/auth/Splash';
import Sigup from './src/screen/auth/Sigup';
import Sigin from '../MyApp2/src/screen/auth/Sigin'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const stack = createNativeStackNavigator();
export default function App() {
  return <NavigationContainer>
    <stack.Navigator>
    <stack.Screen name="splash" component={Splash}/>
      <stack.Screen name="Signin" component={Sigin}/>
      <stack.Screen name="Signup" component={Sigup}/>
    </stack.Navigator>
  </NavigationContainer>
};