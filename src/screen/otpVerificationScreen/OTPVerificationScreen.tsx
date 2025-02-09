import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
} from 'react-native';
import {auth} from '../../firebase/firebaseConfig';
import {signInWithCredential, PhoneAuthProvider} from 'firebase/auth';

const OTPVerificationScreen = ({route, navigation}) => {
  const {verificationId} = route.params;
  const [otp, setOtp] = useState('');

  const confirmOTP = async () => {
    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      await signInWithCredential(auth, credential);

      Alert.alert('Success', 'You are now logged in!');
      navigation.navigate('Dashboard'); // Change this to your home screen
    } catch (error) {
      console.error('OTP Verification Error:', error);
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        keyboardType="numeric"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
      />
      <TouchableOpacity style={styles.button} onPress={confirmOTP}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6A11CB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OTPVerificationScreen;
