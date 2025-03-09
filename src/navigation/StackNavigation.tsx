import OTPVerificationScreen from '../screen/otpVerificationScreen/OTPVerificationScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {fetchWalletBalance} from '../features/wallet/walletBalanceSlice';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MyQuestionScreen from '../screen/myQuestion/MyQuestionScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import QuestionScreens from '../screen/questions/QuestionsScreen';
import DashBoardScreen from '../screen/dashboard/DashboardScreen';
import AddOrderScreen from '../screen/addOrder/AddOrderScreen';
import WalletScreen from '../screen/wallet/WalletScreen';
import {useNavigation} from '@react-navigation/native';
import LoginScreen from '../screen/login/LoginScreen';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';
import {useAuth} from '../auth-context';
import {AppColors} from '../theme';
import HomeScreen from '../screen/home/HomeScreen';
import ContestScreen from '../screen/contest/ContestScreen';
import BatBallQuestionScreen from '../screen/batBallQuestion/BatBallQuestionScreen';
import CaptainScreen from '../screen/captain/CaptainScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabList = [
  {
    name: 'Home',
    iconName: 'home',
  },
  {
    name: 'Wallet',
    iconName: 'wallet',
  },
  {
    name: 'My Question',
    iconName: 'questioncircle',
  },
];

const renderTab = props => {
  const {navigation, state} = props; // Access navigation state
  const activeRouteName = state?.routes[state?.index]?.name; // Get the active tab name

  return (
    <View style={styles.tabContainer}>
      {TabList.map((tabInfo, index) => {
        const isActive = activeRouteName === tabInfo.name; // Check if the tab is active
        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(tabInfo.name)}
            style={[styles.tabButton, isActive && styles.activeTab]}>
            <Icon
              name={tabInfo.iconName}
              color={isActive ? 'white' : AppColors.palette.frostedWhite}
              size={25}
              type="antdesign"
            />
            <Text
              style={{
                color: isActive
                  ? AppColors.bgColor
                  : AppColors.palette.frostedWhite,
              }}>
              {tabInfo.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const DashboardStack = () => {
  const {signOut} = useAuth();

  const [walletBalance, setWalletBalance] = useState(0);
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');
  const [connected, setConnected] = useState(false);
  const websocketRef = useRef(null);
  const scrollViewRef = useRef(null);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const fetchBalance = useSelector(state => state.walletBalance);

  // const connectWebSocket = async () => {
  //   const token = await AsyncStorage.getItem('authToken');

  //   try {
  //     // Create WebSocket instance with custom headers
  //     const ws = new WebSocket('ws://20.40.40.110:8090/ws', [], {
  //       headers: {
  //         Authorization: `${token}`,
  //       },
  //     });

  //     // Connection opened
  //     ws.onopen = () => {
  //       console.log('WebSocket Connection Established');
  //       setConnected(true);
  //       setConnectionStatus('Connected');
  //       // setMessages(prev => [
  //       //   ...prev,
  //       //   {text: 'Connected to server', type: 'system'},
  //       // ]);
  //     };

  //     // Listen for messages
  //     ws.onmessage = event => {
  //       console.log('Message received:', JSON.parse(event.data));

  //       if (event.data) {
  //         console.log('Working...', event.data);

  //         const balanceInfo = JSON.parse(event.data);
  //         setWalletBalance(
  //           balanceInfo?.mainAmount + balanceInfo?.winningAmount,
  //         );
  //       }
  //       // setMessages(prev => [...prev, {text: event.data, type: 'received'}]);
  //     };

  //     // Listen for errors
  //     ws.onerror = error => {
  //       console.log('WebSocket Error:', error);
  //       setConnectionStatus(`Error: ${error.message || 'Unknown error'}`);
  //       // setMessages(prev => [
  //       //   ...prev,
  //       //   {text: `Error: ${error.message || 'Unknown error'}`, type: 'error'},
  //       // ]);
  //     };

  //     // Connection closed
  //     ws.onclose = event => {
  //       console.log('WebSocket Connection Closed:', event.code, event.reason);
  //       setConnected(false);
  //       setConnectionStatus(
  //         `Disconnected: ${event.reason || 'Connection closed'}`,
  //       );
  //       // setMessages(prev => [
  //       //   ...prev,
  //       //   {
  //       //     text: `Disconnected: ${event.reason || 'Connection closed'}`,
  //       //     type: 'system',
  //       //   },
  //       // ]);
  //     };

  //     websocketRef.current = ws;
  //   } catch (error) {
  //     console.error('Failed to connect WebSocket:', error);
  //     setConnectionStatus(`Connection Failed: ${error.message}`);
  //     // setMessages(prev => [
  //     //   ...prev,
  //     //   {text: `Connection Failed: ${error.message}`, type: 'error'},
  //     // ]);
  //   }
  // };

  useEffect(() => {
    // connectWebSocket();
    dispatch(fetchWalletBalance());
  }, []);

  useEffect(() => {
    const balanceInfo = fetchBalance?.data;
    if (balanceInfo?.balance >= 0 && balanceInfo?.winningBalance >= 0) {
      setWalletBalance(balanceInfo?.balance + balanceInfo?.winningBalance);
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
      <Stack.Screen name="Captain" component={CaptainScreen} />
      <Stack.Screen name="BatBallQuestion" component={BatBallQuestionScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Contest" component={ContestScreen} />
      <Stack.Screen name="Dashboard" component={DashBoardScreen} />
      <Stack.Screen name="Wallet" component={WalletScreen} />
      <Stack.Screen name="Question" component={QuestionScreens} />
      <Stack.Screen name="AddOrder" component={AddOrderScreen} />
    </Stack.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      tabBar={props => renderTab(props)}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={DashboardStack} />
      <Stack.Screen name="Wallet" component={WalletScreen} />
      <Stack.Screen name="My Question" component={MyQuestionScreen} />
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

  return !isSignIn ? <AppStack /> : <AuthStack />;
};

const styles = StyleSheet.create({
  tabContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: AppColors.palette.dodgerBlue,
    justifyContent: 'space-between',
  },
  tabButton: {
    height: 55,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Navigation;
