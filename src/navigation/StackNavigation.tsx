import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screen/login/LoginScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen  name="Login" component={LoginScreen} />
      <Stack.Screen  name="DashBoard" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
