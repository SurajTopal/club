import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/StackNavigation';
import {AuthProvider} from './src/auth-context';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthProvider>
          <Navigation />
          <Toast />
        </AuthProvider>
      </NavigationContainer>
    </Provider>
  );
}
