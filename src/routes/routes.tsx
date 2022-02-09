import React from 'react';
import Home from '../modules/film';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FilmDetail from '../modules/film_detail';
import Character from '../modules/character';
import Starships from '../modules/starships';

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'black'
  },
};
let route = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'FilmDetail',
    component: FilmDetail,
  },
  {
    name: "Character",
    component: Character
  },
  {
    name: "Starships",
    component: Starships
  }
];

export default function Routes() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {route.map(({name, component}, idx) => {
          return <Stack.Screen key={idx} name={name} component={component} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
