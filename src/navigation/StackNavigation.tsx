import OTPVerificationScreen from '../screen/otpVerificationScreen/OTPVerificationScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screen/login/LoginScreen';
import SplashScreen from 'react-native-splash-screen';
import {MyTabs} from './BottomTabNavigation';
import {useAuth} from '../auth-context';
import {useEffect} from 'react';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
      {/* <Stack.Screen name="Chat" component={ChatScreen} /> */}
    </Stack.Navigator>
  );
};

const AppStack = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={MyTabs} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const {isSignIn} = useAuth();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return isSignIn ? <AppStack /> : <AuthStack />;
};

export default Navigation;
