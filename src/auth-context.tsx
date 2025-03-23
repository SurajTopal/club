import axios from 'axios';
import Toast from 'react-native-toast-message';
import {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createApi from './redux/api';

type AuthContextType = {
  isLoading: boolean;
  isSignIn: boolean;
  signIn: (data: {mobile: string; otp: string}) => Promise<void>;
  signOut: () => Promise<void>;
  setIsSignIn: (isSignIn: boolean) => void;
  authToken: string | null;
  setContestData: (contestData: any) => void;
  contestData: any;
  totalBalance: Number;
  setTotalBalance: (totalBalance: any) => void;
  api: any;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export function AuthProvider({children}: {children: React.ReactNode}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [contestData, setContestData] = useState({});
  const [totalBalance, setTotalBalance] = useState(0);

  const checkAuthStatus = async () => {
    setIsLoading(true);
    try {
      // Check if the token exists in AsyncStorage
      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        setAuthToken(token);
        console.log('TOKEN', token);
        setIsSignIn(true); // User is signed in if the token exists
      } else {
        setIsSignIn(false);
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const signIn = async ({mobile, otp}: {mobile: string; otp: string}) => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://20.40.40.110:9111/verifyOtp', {
        phone: mobile,
        code: otp,
      });

      if (response?.data?.message === 'OTP verified successfully') {
        console.log('Response : : ', response);
        const token = response?.data?.token; // Adjust key as per API response
        setAuthToken(token); // Save token in state
        await AsyncStorage.setItem('authToken', token); // Save token in AsyncStorage
        Toast.show({
          type: 'success',
          text2: 'Login Successful',
          visibilityTime: 1000,
        });
        setIsSignIn(true);
        console.log('Sign in successful:', response.data);
      } else {
        console.error('Sign in failed:', response);
      }
    } catch (error) {
      Toast.show({
        type: 'info',
        text2: 'Invalid Otp',
      });

      console.log('Error during sign-in:', error?.response || error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      await AsyncStorage.removeItem('authToken'); // Remove the token from AsyncStorage
      setAuthToken(null); // Clear token in state
      setIsSignIn(false);
      console.log('User signed out');
    } catch (error) {
      console.log('Something went wrong while signing out:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const api = createApi(signOut);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isSignIn,
        signIn,
        signOut,
        setIsSignIn,
        authToken,
        setContestData,
        contestData,
        setTotalBalance,
        totalBalance,
        api,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
