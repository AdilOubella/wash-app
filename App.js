/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import React from 'react'
import AppNavigationContainer from './src/navigation'
import GlobalProvider from './src/context/Provider'


const App = () => {
  return (
  <GlobalProvider>
      <AppNavigationContainer/>
  </GlobalProvider>
    
  );
};


export default App;
