import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainDrawer from '../MainDrawer';
import {screenNames} from '../screenNames';
import {CreateTodo, EditTodo, Login} from '../../screens';

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <Stack.Navigator initialRouteName="MainDrawer">
    <Stack.Screen
      name="MainDrawer"
      component={MainDrawer}
      options={{headerShown: false}}
    />
    <Stack.Screen name={screenNames.Login} component={Login} />
    <Stack.Screen name={screenNames.CreateTodo} component={CreateTodo} />
    <Stack.Screen name={screenNames.EditPost} component={EditTodo} />
  </Stack.Navigator>
);

export default AppStack;
