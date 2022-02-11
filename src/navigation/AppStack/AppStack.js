import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {screenNames} from '../screenNames';
import {AddTodo, EditTodo, Login} from '../../screens';
import MainTabs from '../MainTabs/MainTabs';

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MainTabs"
      component={MainTabs}
      options={{headerShown: false}}
    />
    <Stack.Screen name={screenNames.AddTodo} component={AddTodo} />
    <Stack.Screen name={screenNames.EditTodo} component={EditTodo} />
    <Stack.Screen name={screenNames.Login} component={Login} />
  </Stack.Navigator>
);

export default AppStack;
