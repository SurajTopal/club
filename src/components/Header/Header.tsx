import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HIT_SLOP_FIVE} from '../../constant/contants';
import {Icon} from 'react-native-elements';
import {AppColors} from '../../theme';

import {styles} from './header-styles';

interface IHeader {
  title: string;
  isBackButtonVisible?: boolean;
  isWalletVisible?: boolean;
  walletBalance?: Number;
  setIsVisible?: boolean;
}

export default function Header(props: IHeader) {
  const {
    title,
    isBackButtonVisible = false,
    walletBalance = 0,
    isWalletVisible = false,
    setIsVisible,
  } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {isBackButtonVisible && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{marginRight: 20}}>
            <Icon
              name="arrowleft"
              type="antdesign"
              color={AppColors.palette.lightLimeGreen}
            />
          </TouchableOpacity>
        )}
        {title === 'Home' && (
          <TouchableOpacity onPress={() => {}} style={{marginRight: 20}}>
            <Icon
              onPress={() => {}}
              name="menu"
              type="entypo"
              color={AppColors.palette.lightLimeGreen}
            />
          </TouchableOpacity>
        )}

        <Text style={styles.title}>{title}</Text>
      </View>
      {isWalletVisible && (
        <View style={styles.rightContainer}>
          <TouchableOpacity
            style={styles.walletContainer}
            onPress={() => navigation.navigate('Wallet')}>
            <Icon
              name="wallet"
              type="entypo"
              color={AppColors.palette.osloGrey}
            />
            <Text style={styles.amount}>₹{walletBalance || 0}</Text>
          </TouchableOpacity>
          {title === 'Home' && (
            <TouchableOpacity
              hitSlop={HIT_SLOP_FIVE}
              onPress={() => {
                if (setIsVisible) setIsVisible(true);
              }}>
              <Icon
                name="dots-three-vertical"
                type="entypo"
                color={AppColors.bgColor}
              />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
}
