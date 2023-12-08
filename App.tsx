import React from 'react';

import { 
  StatusBar,
  StyleSheet,
  Text,
  View 
} from 'react-native';

import { 
  NavigationContainer, 
} from '@react-navigation/native';

import Routes from './src/router/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor= "#233d1d" barStyle="light-content" />
      <Routes/>
    </NavigationContainer>
  );
}
