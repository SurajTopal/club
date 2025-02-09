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
import auth from '@react-native-firebase/auth';
import {signInWithPhoneNumber} from 'firebase/auth';

const height = Dimensions.get('window').height;

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const navigation = useNavigation<any>();

  const sendOTP = async () => {
    try {
      const phoneNumberWithCountryCode = `+91${phoneNumber}`;

      console.log('NUMBER : ', phoneNumberWithCountryCode);

      // Send OTP
      const confirmation = await auth().signInWithPhoneNumber(
        phoneNumberWithCountryCode,
        true,
      );

    console.log("Confirmation ; ",confirmation?.verificationId);

      setVerificationId(confirmation.verificationId);

      Alert.alert('OTP Sent', 'Please check your SMS');

      // Navigate to OTP Verification screen with verificationId
      navigation.navigate('OTPVerification', {
        verificationId: confirmation.verificationId,
      });
    } catch (error) {
      console.error('OTP Send Error:', error);
      // Alert.alert('Error', error.message);
    }
  };

  const handleLogin = () => {
    if (phoneNumber.length === 10) {
      sendOTP();
    } else {
      Alert.alert(
        'Invalid Number',
        'Please enter a valid 10-digit mobile number',
      );
    }
  };

  return (
    <LinearGradient colors={['#6A11CB', '#2575FC']} style={styles.container}>
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

        <TouchableOpacity
          style={[
            styles.loginButton,
            phoneNumber.length !== 10 && styles.disabledButton,
          ]}
          onPress={handleLogin}
          disabled={phoneNumber.length !== 10}>
          <Text style={styles.loginText}>Send OTP</Text>
        </TouchableOpacity>
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
    marginBottom: 20,
    marginHorizontal: 20,
  },
  phonePrefix: {
    color: 'white',
    paddingHorizontal: 15,
    borderRightWidth: 1,
    borderRightColor: 'rgba(255,255,255,0.3)',
  },
  input: {
    color: 'white',
    padding: 15,
  },
  loginButton: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  loginText: {
    color: '#6A11CB',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginScreen;
