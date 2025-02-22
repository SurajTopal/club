import OTPVerificationScreen from '../screen/otpVerificationScreen/OTPVerificationScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {fetchWalletBalance} from '../features/wallet/walletBalanceSlice';
import QuestionScreens from '../screen/questions/QuestionsScreen';
import DashBoardScreen from '../screen/dashboard/DashboardScreen';
import AddOrderScreen from '../screen/addOrder/AddOrderScreen';
import Leaderboard from '../screen/leaderboard/Leaderboard';
import {useEffect, useLayoutEffect, useState} from 'react';
import WalletScreen from '../screen/wallet/WalletScreen';
import {useNavigation} from '@react-navigation/native';
import LoginScreen from '../screen/login/LoginScreen';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';
import {Text, View} from 'react-native';
import {useAuth} from '../auth-context';
import {AppColors} from '../theme';
import MyQuestionScreen from '../screen/myQuestion/MyQuestionScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const DashboardStack = () => {
  const {signOut} = useAuth();
  const [walletBalance, setWalletBalance] = useState(0);
  const dispatch = useDispatch();

  const navigation = useNavigation();

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

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerRight: () => (
          <View
            style={{
              alignItems: 'flex-end',
              width: 100,
              paddingRight: 10,
            }}>
            <Text
              onPress={() => navigation.navigate('Wallet')}
              style={{
                fontSize: 15,
                color: AppColors.palette.greenBlue,
              }}>
              ₹{walletBalance.toString()}
            </Text>
          </View>
        ),
      }}>
      <Stack.Screen name="Dashboard" component={DashBoardScreen} />
      <Stack.Screen name="Wallet" component={WalletScreen} />
      <Stack.Screen name="Question" component={QuestionScreens} />
      <Stack.Screen name="AddOrder" component={AddOrderScreen} />
    </Stack.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={DashboardStack} />
      <Stack.Screen name="Wallet" component={WalletScreen} />
      <Stack.Screen
        name="My Question"
        component={MyQuestionScreen}
        options={{headerShown: true}}
      />
      {/* <Tab.Screen name="Leaderboard" component={Leaderboard} /> */}
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
