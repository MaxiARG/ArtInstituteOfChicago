import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/Screens/Home';
import Favorites from './src/Screens/Favorites';
import Config from 'react-native-config';

import Icon from 'react-native-vector-icons/FontAwesome';
import Details from './src/Screens/Details';

const myIcon = <Icon name="rocket" size={30} color="#900" />;


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackHome = () => {
  return(
    <Stack.Navigator 
    screenOptions={{headerShown:false}}
    >
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Details' component={Details}/>
    </Stack.Navigator>
  );
}


export default function App() {
  const navigation = useNavigation()
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="StackHome" component={StackHome} 
        options={{
          tabBarIcon:({focused})=>{
            return <Icon name="home" size={30} color="black" style={{color: focused?Config.COLOR_NARANJA:Config.COLOR_VERDE}} />
          },
          tabBarActiveTintColor: Config.COLOR_NARANJA,
          tabBarStyle:{backgroundColor:Config.COLOR_NEGRO}
          }}
        
        />

        <Tab.Screen name="Favorites" component={Favorites}
        options={{
          headerShown:true,
          headerStyle:{backgroundColor: Config.COLOR_VERDE},
          headerTitleAlign: 'center',
          headerTintColor:'white',
          headerLeft: () => {
          return( 
            <View style={{display:'flex', flexDirection:'row', left:10}}>
              <Icon name="arrow-left" size={20} color="white" onPress={()=>{navigation.goBack()}}/>
              <Text style={{marginLeft:15, color: 'white', fontSize:15, alignSelf:'center'}}>Back</Text>
            </View>
            )
          },
          tabBarIcon:({focused})=>{return  <Icon name="star" size={30} color="black" style={{color: focused?Config.COLOR_NARANJA:Config.COLOR_VERDE}} />},
          tabBarActiveTintColor: Config.COLOR_NARANJA,
          tabBarIconStyle:{color:'black'},
          tabBarStyle:{backgroundColor:Config.COLOR_NEGRO}
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}