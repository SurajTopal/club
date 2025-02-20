import OTPVerificationScreen from '../screen/otpVerificationScreen/OTPVerificationScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import QuestionScreens from '../screen/questions/QuestionsScreen';
import DashBoardScreen from '../screen/dashboard/DashboardScreen';
import Leaderboard from '../screen/leaderboard/Leaderboard';
import LoginScreen from '../screen/login/LoginScreen';
import SplashScreen from 'react-native-splash-screen';
import {Text, TouchableOpacity, View} from 'react-native';
import {useAuth} from '../auth-context';
import {useEffect, useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWalletBalance} from '../features/wallet/walletBalanceSlice';
import {AppColors} from '../theme';
import AddOrderScreen from '../screen/addOrder/AddOrderScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const DashboardStack = () => {
  const {signOut} = useAuth();
  const [walletBalance, setWalletBalance] = useState(0);
  const dispatch = useDispatch();

  const fetchBalance = useSelector(state => state.walletBalance);

  useEffect(() => {
    dispatch(fetchWalletBalance());
  }, []);

  useEffect(() => {
    const balance = fetchBalance?.data?.balance;

    if (balance?.MainWalletBalance >= 0 && balance?.WinningWalletBalance >= 0) {
      setWalletBalance(
        balance?.MainWalletBalance + balance?.WinningWalletBalance,
      );
    }
  }, [fetchBalance]);
  console.log('Walllet Balance ;;;;', fetchBalance);

  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="Dashboard"
        component={DashBoardScreen}
        options={({navigation}) => ({
          headerShown: true,
          headerRight: () => (
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                width: 50,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: AppColors.palette.greenBlue,
                }}>
                ₹{walletBalance.toString()}
              </Text>
            </View>
          ),
        })}
      />
      <Stack.Screen name="Question" component={QuestionScreens} />
      <Stack.Screen name="AddOrder" component={AddOrderScreen} />
      {/* <Stack.Screen name="Chat" component={ChatScreen} /> */}
    </Stack.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={DashboardStack} />
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

  return isSignIn ? <AppStack /> : <AuthStack />;
};

export default Navigation;
