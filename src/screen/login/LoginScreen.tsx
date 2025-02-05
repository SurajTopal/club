import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text onPress={() => navigation.navigate('DashBoard')}>Login</Text>
    </View>
  );
}
