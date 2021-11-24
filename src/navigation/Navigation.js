import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Calling from '../screens/Calling';
import CallAttend from '../screens/CallAttend';
import Contact from '../screens/Contact';
import IncomingCalling from '../screens/IncomingCalling';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="CallAttend" component={CallAttend} />
          <Stack.Screen name="Calling" component={Calling} />
          <Stack.Screen name="IncomingCalling" component={IncomingCalling} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
