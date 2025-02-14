import OTPVerificationScreen from '../screen/otpVerificationScreen/OTPVerificationScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import QuestionScreens from '../screen/questions/QuestionsScreen';
import DashBoardScreen from '../screen/dashboard/DashboardScreen';
import Leaderboard from '../screen/leaderboard/Leaderboard';
import LoginScreen from '../screen/login/LoginScreen';
import SplashScreen from 'react-native-splash-screen';
import {Text, TouchableOpacity} from 'react-native';
import {useAuth} from '../auth-context';
import { useLayoutEffect} from 'react';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Dashboard" component={DashBoardScreen} />
      <Stack.Screen name="Question" component={QuestionScreens} />
      {/* <Stack.Screen name="Chat" component={ChatScreen} /> */}
    </Stack.Navigator>
  );
};

function MyTabs() {
  const {signOut} = useAuth();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={DashboardStack}
        options={({navigation}) => ({
          headerShown: false,
          headerRight: () => (
            <TouchableOpacity onPress={signOut} style={{marginRight: 20}}>
              <Text>Logout</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen name="Leaderboard" component={Leaderboard} />
    </Tab.Navigator>
  );
}

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
      <Stack.Screen name="TabStack" component={MyTabs} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const {isSignIn} = useAuth();

  useLayoutEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return !isSignIn ? <AppStack /> : <AuthStack />;
};

export default Navigation;
