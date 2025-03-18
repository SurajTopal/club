import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './button-styles';
import {Icon} from 'react-native-elements';
import {AppColors} from '../../theme';

interface IButton {
  title: string;
  buttonStyle?: any;
  buttonTitleStyle?: any;
  handleButtonPress: () => void;
  isIconVisible?: boolean;
}

export default function Button(props: IButton) {
  const {
    title,
    buttonStyle = {},
    buttonTitleStyle = {},
    handleButtonPress,
    isIconVisible = false,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={handleButtonPress}>
      {isIconVisible && (
        <Icon
          name="add"
          type="antDesign"
          color={AppColors.palette.black}
          style={{marginRight: 10}}
        />
      )}
      <Text style={[styles.buttonText, buttonTitleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}
