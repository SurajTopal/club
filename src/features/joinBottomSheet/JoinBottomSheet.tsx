import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BottomSheet, Icon} from 'react-native-elements';
import {AppColors} from '../../theme';
import Button from '../../components/Button/Button';
import {useAuth} from '../../auth-context';

import {styles} from './joinBottomSheet-styles';

const ContestBottomSheet = props => {
  const {isVisible, setIsVisible, handleJoinButton} = props;

  const {contestData, totalBalance} = useAuth();

  const renderContent = () => (
    <View style={styles.sheetContent}>
      <TouchableOpacity
        style={{position: 'absolute', right: 20, top: 20}}
        onPress={() => setIsVisible(false)}>
        <Icon name="close" type="antdesign" color={AppColors.bgColor} />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View>
          <Text style={styles.title}>Join contest</Text>
          <Text style={styles.balance}>Amount Unutilised + Winnings = ₹{totalBalance}</Text>
        </View>
      </View>
      <View style={styles.entryRow}>
        <Text style={styles.label}>Entry Fee</Text>
        <Text style={styles.value}>₹{contestData?.currentFee}</Text>
      </View>

      <View style={styles.entryRow}>
        <Text style={styles.label}>To Pay</Text>
        <Text style={styles.value}>₹{contestData?.currentFee}</Text>
      </View>

      <Text style={styles.terms}>
        I agree with the standard <Text style={styles.link}>T&Cs</Text>
      </Text>

      <Button title={'Join'} handleButtonPress={handleJoinButton} />
    </View>
  );

  return (
    <BottomSheet isVisible={isVisible} containerStyle={styles.container}>
      {renderContent()}
    </BottomSheet>
  );
};

export default ContestBottomSheet;
