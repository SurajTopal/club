import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBoardScreen from '../screen/dashboard/DashboardScreen';
import Leaderboard from '../screen/leaderboard/Leaderboard';
import {Text, TouchableOpacity} from 'react-native';
import {useAuth} from '../auth-context';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const {signOut} = useAuth();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={DashBoardScreen}
        options={({navigation}) => ({
          headerShown: true,
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

export {MyTabs};
