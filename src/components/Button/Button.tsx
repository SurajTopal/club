import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './button-styles';

interface IButton {
  title: string;
  buttonStyle?: any;
  buttonTitleStyle?: any;
  handleButtonPress: () => void;
}

export default function Button(props: IButton) {
  const {
    title,
    buttonStyle = {},
    buttonTitleStyle = {},
    handleButtonPress,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={handleButtonPress}>
      <Text style={[styles.buttonText, buttonTitleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}
