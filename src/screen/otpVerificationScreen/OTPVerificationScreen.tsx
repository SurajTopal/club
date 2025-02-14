import React, {useState} from 'react';
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-toast-message';
import {useAuth} from '../../auth-context';

const height = Dimensions.get('window').height;

const OTPVerificationScreen = props => {
  const {
    route: {
      params: {mobile},
    },
  } = props;

  const [enteredOtp, setEnteredOtp] = useState('');
  const {signIn} = useAuth();

  const handleSignIn = () => {
    console.log('OTP ', enteredOtp);
    if (mobile && enteredOtp) {
      const loginDetails = {mobile: mobile, otp: enteredOtp};
      signIn(loginDetails);
    } else {
      Toast.show({
        type: 'info',
        text2: 'Otp is required',
        visibilityTime: 2000,
      });
    }
  };

  return (
    <LinearGradient colors={['#6A11CB', '#2575FC']} style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Enter OTP</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          keyboardType="numeric"
          maxLength={6}
          placeholderTextColor={'white'}
          value={enteredOtp}
          onChangeText={setEnteredOtp}
        />
        <TouchableOpacity
          style={[
            styles.otpButton,
            enteredOtp?.length !== 6 && styles.disableButton,
          ]}
          onPress={handleSignIn}>
          <Text style={styles.buttonText}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    marginTop: height * 0.25,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    color: 'white',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  otpButton: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  disableButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#6A11CB',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OTPVerificationScreen;
