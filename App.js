import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <NativeBaseProvider></NativeBaseProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
