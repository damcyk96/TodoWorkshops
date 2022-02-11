import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <NativeBaseProvider>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

export default App;
