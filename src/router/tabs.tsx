//Basic Imports
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

//Pages Imports
import Home from '../pages/home/home';
import Vistoria from '../pages/vistoria/vistoria';
import Imovel from '../pages/imovel/imovel';
import Proprietario from '../pages/proprietario/proprietario';

//Components Imports
import MyTabBar from '../components/customTabBar';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={
        {
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: '#222',

          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: '#fff',
          }
        }
      }
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: "home"
        }}
      />
      <Tab.Screen
        name="Vistoria"
        component={Vistoria}
        options={{
          tabBarIcon: "assignment"
        }}
      />
      <Tab.Screen 
        name="Imovel" 
        component={Imovel}
        options={{
          tabBarIcon: "apartment",
        }}
      />
      <Tab.Screen 
        name="Proprietario" 
        component={Proprietario} 
        options={{
          tabBarIcon: "person",
        }}
      />
    </Tab.Navigator>
  );
}