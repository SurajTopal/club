import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from './src/navigation/StackNavigation';
import {AuthProvider} from './src/auth-context';
import Toast from 'react-native-toast-message';
import {store} from './src/redux/store';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {AppColors} from './src/theme';

export default function App() {
  const tokengenerate = async () => {
    await AsyncStorage.setItem(
      'authToken',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDIyMzUwNzksImlkIjoiMDNlZDcyY2QtMzRlMC00ZjM0LThhYjgtNTcxM2ZlMjdlY2VlIiwicm9sZV9pZCI6InVzZXIifQ.rVYM2r0WDRp-I48lXOb-MxJK7O-RE5YTa7XZXSGeq34',
    );
  };

  useEffect(() => {
    tokengenerate();

    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={AppColors.palette.black} />
      <NavigationContainer>
        <AuthProvider>
          <Navigation />
          <Toast />
        </AuthProvider>
      </NavigationContainer>
    </Provider>
  );
}
