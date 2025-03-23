import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/StackNavigation';
import {AuthProvider} from './src/auth-context';
import Toast from 'react-native-toast-message';
import {store} from './src/redux/store';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {AppColors} from './src/theme';

export default function App() {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={AppColors.palette.black} />
      <NavigationContainer >
        <AuthProvider>
          <Navigation />
          <Toast />
        </AuthProvider>
      </NavigationContainer>
    </Provider>
  );
}
