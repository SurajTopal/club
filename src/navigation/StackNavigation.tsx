import OTPVerificationScreen from '../screen/otpVerificationScreen/OTPVerificationScreen';
import BatBallQuestionScreen from '../screen/batBallQuestion/BatBallQuestionScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {fetchWalletBalance} from '../features/wallet/walletBalanceSlice';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MyQuestionScreen from '../screen/myQuestion/MyQuestionScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import QuestionScreens from '../screen/questions/QuestionsScreen';
import DashBoardScreen from '../screen/dashboard/DashboardScreen';
import AddOrderScreen from '../screen/addOrder/AddOrderScreen';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';
import CaptainScreen from '../screen/captain/CaptainScreen';
import ContestScreen from '../screen/contest/ContestScreen';
import SettingScreen from '../screen/setting/SettingScreen';
import WalletScreen from '../screen/wallet/WalletScreen';
import {useNavigation} from '@react-navigation/native';
import LoginScreen from '../screen/login/LoginScreen';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';
import HomeScreen from '../screen/home/HomeScreen';
import JoinScreen from '../screen/join/JoinScreen';
import Header from '../components/Header/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAuth} from '../auth-context';
import {AppColors} from '../theme';
import MyMatchesScreen from '../screen/myMatches/MyMatchesScreen';
import HowToPlayScreen from '../screen/howToPlay/HowToPlayScreen';
import CustomDrawer from './Drawer';
import GetStartedScreen from '../screen/getStarted/GetStartedScreen';
import TeamScreen from '../screen/team/TeamScreen';
import config from '../config';
import MyContestScreen from '../screen/myContest/MyContestScreen';
import WinningLeaderBoardScreen from '../screen/winningLeaderboard/WinningLeaderBoardScreen';
import ProfileScreen from '../screen/profile/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabList = [
  {
    name: 'Home',
    iconName: 'home',
  },
  {
    name: 'My Matches',
    iconName: 'cricket',
  },
  {
    name: 'How to Play',
    iconName: 'gamepad-variant-outline',
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
              color={
                isActive
                  ? AppColors.palette.lightLimeGreen
                  : AppColors.palette.frostedWhite
              }
              size={25}
            />
            <Text
              style={{
                color: isActive
                  ? AppColors.palette.lightLimeGreen
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
  const {signOut, setTotalBalance} = useAuth();

  const [walletBalance, setWalletBalance] = useState(0);
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');
  const [connected, setConnected] = useState(false);
  const websocketRef = useRef(null);
  const scrollViewRef = useRef(null);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const fetchBalance = useSelector(state => state.walletBalance);

  const connectWebSocket = async () => {
    const token = await AsyncStorage.getItem('authToken');

    try {
      // Create WebSocket instance with custom headers
      const ws = new WebSocket('ws://20.40.40.110:8090/ws', [], {
        headers: {
          Authorization: `${token}`,
        },
      });

      // Connection opened
      ws.onopen = () => {
        console.log('WebSocket Connection Established');
        setConnected(true);
        setConnectionStatus('Connected');
        // setMessages(prev => [
        //   ...prev,
        //   {text: 'Connected to server', type: 'system'},
        // ]);
      };

      // Listen for messages
      ws.onmessage = event => {
        console.log('Message received:', JSON.parse(event.data));

        if (event.data) {
          const balanceInfo = JSON.parse(event.data);
          setWalletBalance(
            balanceInfo?.mainAmount + balanceInfo?.winningAmount,
          );

          setTotalBalance(balanceInfo?.mainAmount + balanceInfo?.winningAmount);
        }
        // setMessages(prev => [...prev, {text: event.data, type: 'received'}]);
      };

      // Listen for errors
      ws.onerror = error => {
        console.log('WebSocket Error:', error);
        setConnectionStatus(`Error: ${error.message || 'Unknown error'}`);
        // setMessages(prev => [
        //   ...prev,
        //   {text: `Error: ${error.message || 'Unknown error'}`, type: 'error'},
        // ]);
      };

      // Connection closed
      ws.onclose = event => {
        console.log('WebSocket Connection Closed:', event.code, event.reason);
        setConnected(false);
        setConnectionStatus(
          `Disconnected: ${event.reason || 'Connection closed'}`,
        );
        // setMessages(prev => [
        //   ...prev,
        //   {
        //     text: `Disconnected: ${event.reason || 'Connection closed'}`,
        //     type: 'system',
        //   },
        // ]);
      };

      websocketRef.current = ws;
    } catch (error) {
      console.error('Failed to connect WebSocket:', error);
      setConnectionStatus(`Connection Failed: ${error.message}`);
      // setMessages(prev => [
      //   ...prev,
      //   {text: `Connection Failed: ${error.message}`, type: 'error'},
      // ]);
    }
  };

  useEffect(() => {
    connectWebSocket();
    // dispatch(fetchWalletBalance());
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
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WinningLeaderboard"
        component={WinningLeaderBoardScreen}
        options={{
          header: () => <Header isBackButtonVisible title="Contest Status" />,
        }}
      />
      <Stack.Screen
        name="Join"
        component={JoinScreen}
        options={{
          header: () => (
            <Header
              isBackButtonVisible
              title="Join"
              isWalletVisible
              walletBalance={walletBalance}
            />
          ),
        }}
      />
      {/* <Stack.Screen name="My Matches" component={MyMatchesScreen} /> */}
      <Stack.Screen
        name="BatBallQuestion"
        component={BatBallQuestionScreen}
        options={{
          header: () => (
            <Header
              isBackButtonVisible
              title="Player Selection"
              isWalletVisible
              walletBalance={walletBalance}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Captain"
        component={CaptainScreen}
        options={{
          header: () => (
            <Header
              isBackButtonVisible
              title="Select C & CV"
              isWalletVisible
              walletBalance={walletBalance}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Contest"
        component={ContestScreen}
        options={{
          header: () => (
            <Header
              isBackButtonVisible
              title="Contest"
              isWalletVisible
              walletBalance={walletBalance}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Team"
        component={TeamScreen}
        options={{
          header: () => (
            <Header
              isBackButtonVisible
              title="Team"
              isWalletVisible
              walletBalance={walletBalance}
            />
          ),
        }}
      />
      <Stack.Screen name="Dashboard" component={DashBoardScreen} />
      <Stack.Screen
        name="Wallet"
        component={WalletScreen}
        options={{header: () => <Header isBackButtonVisible title="Wallet" />}}
      />
      <Stack.Screen name="Question" component={QuestionScreens} />
      <Stack.Screen name="AddOrder" component={AddOrderScreen} />
    </Stack.Navigator>
  );
};

const MyMatchesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My Matches"
        component={MyMatchesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="My Contest"
        component={MyContestScreen}
        options={{
          headerShown: true,
          header: () => (
            <Header title="My Contest" isBackButtonVisible={true} />
          ),
        }}
      />
      <Stack.Screen
        name="WinningLeaderboard"
        component={WinningLeaderBoardScreen}
        options={{
          header: () => <Header isBackButtonVisible title="Contest Status" />,
        }}
      />
    </Stack.Navigator>
  );
};

function MyTabs() {
  const getTabBarVisibility = route => {
    const routeName = route.state?.routes?.[route.state.index]?.name ?? '';

    console.log('Route Name : ', routeName);

    if (routeName === 'BatBallQuestion') {
      return 'none';
    }
    return 'flex';
  };

  return (
    <Tab.Navigator
      tabBar={props => renderTab(props)}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={DashboardStack}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
          },
        })}
      />
      <Stack.Screen name="My Matches" component={MyMatchesStack} />
      <Stack.Screen name="How to Play" component={HowToPlayScreen} />
      {/* <Tab.Screen name="Leaderboard" component={Leaderboard} /> */}
    </Tab.Navigator>
  );
}

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: true,
          header: () => (
            <Header title="Login/Register" isBackButtonVisible={true} />
          ),
        }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="OTPVerification"
        component={OTPVerificationScreen}
        options={{
          headerShown: true,
          header: () => (
            <Header title="Verification" isBackButtonVisible={true} />
          ),
        }}
      />
      {/* <Stack.Screen name="Chat" component={ChatScreen} /> */}
    </Stack.Navigator>
  );
};

// const AppStack = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{headerShown: false}}
//       drawerContent={props => <CustomDrawer {...props} />}>
//       <Drawer.Screen name="TabStack" component={MyTabs} />
//     </Drawer.Navigator>
//   );
// };

const AppStack = () => {
  const [newUser, setNewUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  useEffect(() => {
    const getUserStatus = async () => {
      const userStatus = await AsyncStorage.getItem('isNewUser');
      setNewUser(userStatus === 'true');
      setIsLoading(false); 
    };

    getUserStatus();
  }, []);

  if (isLoading)
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: AppColors.palette.black,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color={AppColors.palette.dodgerBlue} />
      </View>
    );
 

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {newUser === true && (
        <Stack.Screen name="Profile" component={ProfileScreen} />
      )}
      <Stack.Screen name="TabStack" component={MyTabs} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const {isSignIn} = useAuth();
  // const [newUser, setNewUser] = useState(null);

  // const getUserStatus = async () => {
  //   const userStatus = await AsyncStorage.getItem('isNewUser');
  //   console.log('userStatus', Boolean(userStatus));
  //   setNewUser(userStatus);
  // };

  // useEffect(() => {
  //   getUserStatus();
  // }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return isSignIn ? <AppStack /> : <AuthStack />;
};

const styles = StyleSheet.create({
  tabContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: '#1C1C1C',
    elevation: 2,
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
