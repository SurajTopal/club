import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import {AppColors} from '../../theme';

import {styles} from './header-styles';

interface IHeader {
  title: string;
  isBackButtonVisible?: boolean;
  isDrawer?: boolean;
  isWalletVisble?: boolean;
  walletBalance?: Number;
  isWalletVisible?: boolean;
  setIsVisible?: (isVisible: boolean) => void;
}

export default function Header(props: IHeader) {
  const {
    title,
    isBackButtonVisible = false,
    isDrawer = false,
    walletBalance = 0,
    setIsVisible,
    isWalletVisble = false,
  } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {isBackButtonVisible && (
          <Icon
            onPress={() => {}}
            name="arrowleft"
            type="antdesign"
            color={AppColors.palette.lightLimeGreen}
          />
        )}
        {isDrawer && (
          <Icon
            onPress={() => {}}
            name="menu"
            type="entypo"
            color={AppColors.palette.lightLimeGreen}
          />
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      {isWalletVisble && (
        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.walletContainer}>
            <Icon
              name="wallet"
              type="entypo"
              color={AppColors.palette.osloGrey}
            />
            <Text
              onPress={() => navigation.navigate('Wallet')}
              style={styles.amount}>
              ₹{walletBalance}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsVisible(true)}>
            <Icon
              name="dots-three-vertical"
              type="entypo"
              color={AppColors.bgColor}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
