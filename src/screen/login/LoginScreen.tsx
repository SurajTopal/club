import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import Button from '../../components/Button/Button';
import {AppColors} from '../../theme';
import {CheckBox} from 'react-native-elements';

const {height, width} = Dimensions.get('screen');

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isCertifyChecked, setIsCertifyChecked] = useState(false);

  const navigation = useNavigation<any>();

  // Add this function to request SMS permissions
  // const requestSMSPermission = async () => {
  //   if (Platform.OS === 'android') {
  //     try {
  //       const permissions = [
  //         PermissionsAndroid.PERMISSIONS.READ_SMS,
  //         PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
  //         PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
  //         PermissionsAndroid.PERMISSIONS.READ_PHONE_NUMBERS,
  //       ];

  //       const granted = await PermissionsAndroid.requestMultiple(permissions);

  //       const allPermissionsGranted = Object.values(granted).every(
  //         permission => permission === PermissionsAndroid.RESULTS.GRANTED,
  //       );

  //       if (allPermissionsGranted) {
  //         console.log('All permissions granted');
  //         return true;
  //       } else {
  //         console.log('Permissions denied');
  //         // Show a message to user about why permissions are needed
  //         Toast.show({
  //           type: 'info',
  //           text2: 'Permissions are required for auto OTP detection',
  //           visibilityTime: 3000,
  //         });
  //         return false;
  //       }
  //     } catch (err) {
  //       console.warn(err);
  //       return false;
  //     }
  //   }
  // };

  // useEffect(() => {
  //   requestSMSPermission();
  // }, []);

  const sendOTP = async () => {
    try {
      const response = await axios.post('http://20.40.40.110:9111/login', {
        phone: phoneNumber,
      });

      if (response.status === 200) {
        Toast.show({
          type: 'success',
          text2: 'OTP has been sent!!',
          visibilityTime: 1000,
        });
        navigation.navigate('OTPVerification', {
          mobile: phoneNumber,
        });
      }
    } catch (error) {
      console.log('Error : ', error);
      Toast.show({
        type: 'info',
        text2: 'Invalid Phone Number !! ',
      });
    }
  };

  const handleLogin = () => {
    if (phoneNumber.length === 10) {
      if (isCertifyChecked) sendOTP();
      else Toast.show({text1: 'Please check T&C.', type: 'info'});
    } else {
      Alert.alert(
        'Invalid Number',
        'Please enter a valid 10-digit mobile number',
      );
    }
  };

  return (
    <LinearGradient colors={['#1B242E', 'black']} style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Login to your account</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.phonePrefix}>+91</Text>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            keyboardType="numeric"
            maxLength={10}
            placeholderTextColor="white"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-start',
          }}>
          <CheckBox
            checked={isCertifyChecked}
            onPress={() => setIsCertifyChecked(!isCertifyChecked)}
            checkedColor={AppColors.palette.lightLimeGreen}
            uncheckedColor={AppColors.bgColor}
          />
          <Text style={styles.text}> I certify that I am above 18 yeras</Text>
        </View>
        <Button
          disabled={phoneNumber.length !== 10}
          buttonStyle={[
            styles.loginButton,
            phoneNumber.length !== 10 && styles.disabledButton,
          ]}
          handleButtonPress={handleLogin}
          title="Send OTP"
        />
        <Text style={styles.text}>By Continue, I agree to aceept T&C.</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    marginTop: height * 0.25,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e0e0',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    marginHorizontal: 20,
  },
  phonePrefix: {
    color: 'white',
    paddingHorizontal: 15,
    borderRightWidth: 1,
    borderRightColor: 'rgba(255,255,255,0.3)',
  },
  input: {
    color: AppColors.bgColor,
    padding: 15,
    flex: 1,
  },
  text: {
    color: AppColors.palette.osloGrey,
    fontSize: 13,
  },
  loginButton: {
    width: width * 0.9,
    marginBottom: 10,
  },
  disabledButton: {
    opacity: 0.5,
  },
  loginText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginScreen;
