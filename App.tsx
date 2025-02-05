import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default function componentName() {
  useEffect(() => {
    SplashScreen.hide();
  }, [2000]);
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text style={{marginTop: 30}}>...APP.......</Text>
    </View>
  );
}
