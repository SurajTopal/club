import {initializeApp, getApps, getApp} from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCfW_qCqx9dUr05UQ7wpdH7plp1dmNgnF8',
  appId: '1:185450433832:android:fdb3542df25a388130d41d',
  messagingSenderId: '185450433832',
  projectId: 'highrollerclub-b349e',
  storageBucket: 'highrollerclub-b349e.appspot.com', // Corrected storage bucket
};

// Ensure Firebase is initialized only once
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Disable app verification for testing
auth.settings.appVerificationDisabledForTesting = true;

export {auth};
export const db = getFirestore(app);
export default app;
