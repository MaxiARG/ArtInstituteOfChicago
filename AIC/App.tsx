import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/Screens/Home';
import Favorites from './src/Screens/Favorites';


import Icon from 'react-native-vector-icons/FontAwesome';

const myIcon = <Icon name="rocket" size={30} color="#900" />;


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function App() {

  const favIcon = <Icon name="rocket" size={30} color="black" />;
  const homeIcon = <Icon name="home" size={30} color="black" />;

  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={Home} 
      options={{tabBarIcon:()=>{return homeIcon}}}
      />
      <Tab.Screen name="Favorites" component={Favorites}
      options={{
        tabBarIcon:()=>{return favIcon},
        tabBarIconStyle:{color:'black'}
      }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}