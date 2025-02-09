import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screen/login/LoginScreen';
import DashBoardScreen from '../screen/dashboard/DashboardScreen';
import OTPVerificationScreen from '../screen/otpVerificationScreen/OTPVerificationScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />

      <Stack.Screen name="Dashboard" component={DashBoardScreen} />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashBoardScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const isLogin = false;

  return isLogin ? <AppStack /> : <AuthStack />;
};

export default Navigation;
