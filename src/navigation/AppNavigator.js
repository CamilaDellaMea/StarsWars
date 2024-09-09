import React from 'react';  
import { createStackNavigator } from '@react-navigation/stack';  
import CharacterListScreen from '../screens/CharacterListScreen';  
import CharacterDetailScreen from '../screens/CharacterDetailScreen';  
import ShipsScreen from '../screens/ShipsScreen';  
import MoviesScreen from '../screens/MoviesScreen';  
import AboutScreen from '../screens/AboutScreen';  

const Stack = createStackNavigator();  

const AppNavigator = () => {  
  return (  
    <Stack.Navigator initialRouteName="CharacterList">  
      <Stack.Screen name="CharacterList" component={CharacterListScreen} />  
      <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />  
      <Stack.Screen name="Ships" component={ShipsScreen} />  
      <Stack.Screen name="Movies" component={MoviesScreen} />  
      <Stack.Screen name="About" component={AboutScreen} />  
    </Stack.Navigator>  
  );  
};  

export default AppNavigator;