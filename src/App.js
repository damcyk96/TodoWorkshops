import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './navigation/AppStack';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <NativeBaseProvider>
          <NavigationContainer>
            <AppStack />
          </NavigationContainer>
        </NativeBaseProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
