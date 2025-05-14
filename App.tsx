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
import * as Sentry from '@sentry/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

Sentry.init({
  dsn: 'https://db2c341da84cc494b0a1f57b4ee9e9a5@o4509055856279552.ingest.us.sentry.io/4509055856541696',

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});

// const saveAuthToken = async () => {
//   try {
//     await AsyncStorage.setItem(
//       'authToken',
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDY1Mjg4OTIsImlkIjoiMDNlZDcyY2QtMzRlMC00ZjM0LThhYjgtNTcxM2ZlMjdlY2VlIiwicm9sZV9pZCI6InVzZXIifQ.5uIAuFtHWofT4Cw-xBNhn3WTAOaCcVJNfqwNR68EDUA',
//     );
//     console.log('Auth token saved successfully!');
//   } catch (error) {
//     console.error('Failed to save auth token:', error);
//   }
// };

export default Sentry.wrap(function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    // saveAuthToken();
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
});
