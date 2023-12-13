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

  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarIcon:({focused})=>{
          return <Icon name="home" size={30} color="black" style={{color: focused?'#24acb4':'grey'}} />
        },
         tabBarActiveTintColor:'#6d32a8'
        }}
      
      />
      <Tab.Screen name="Favorites" component={Favorites}
      options={{
        tabBarIcon:({focused})=>{return  <Icon name="rocket" size={30} color="black" style={{color: focused?'#5A7E54':'grey'}} />},
        tabBarActiveTintColor:'#6d32a8',
        tabBarIconStyle:{color:'black'}
      }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}