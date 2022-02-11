import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AddTodo, Settings} from '../../screens';
import {screenNames} from '../screenNames';

const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name={screenNames.AddTodo} component={AddTodo} />
    <Tab.Screen name={screenNames.Settings} component={Settings} />
  </Tab.Navigator>
);

export default MainTabs;
