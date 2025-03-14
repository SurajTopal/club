import React from 'react';
import {StyleSheet, ImageBackground, Dimensions} from 'react-native';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

export default function GetStartedScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../assets/images/FirstScreen.jpg')}
      style={styles.container}>
      <Button
        title="Get Started"
        handleButtonPress={() => navigation.navigate('Login')}
        buttonStyle={styles.button}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: height * 0.07,
    alignSelf: 'center',
    width: width * 0.9,
  },
});
