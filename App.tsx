import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/StackNavigation';
import {AuthProvider} from './src/auth-context';
import Toast from 'react-native-toast-message';

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigation />
        <Toast />
      </AuthProvider>
    </NavigationContainer>
  );
}
