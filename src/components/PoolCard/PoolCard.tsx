import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import {AppColors} from '../../theme';

import {styles} from './poolCard-styles';

const {width} = Dimensions.get('window');

const PoolCard = () => {
  const totalSpots = 2000;
  const remainingSpots = 1422;
  const progress = (totalSpots - remainingSpots) / totalSpots;

  const navigation = useNavigation();

  console.log('progress', progress);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('BatBallQuestion')}>
      {/* Pool Type and Discount */}
      <View style={styles.headerRow}>
        <View style={styles.flexRow}>
          <Icon name="line-chart" size={14} color="lightgreen" />
          <Text style={styles.flexiblePool}> Flexible pool</Text>
        </View>
        <Text style={styles.discount}>
          <Text style={styles.strikeThrough}>₹75</Text> ₹65
        </Text>
      </View>

      {/* Pool Amount */}
      <Text style={styles.poolAmount}>₹1.26 Lakhs</Text>

      {/* Prize Details */}
      <View style={styles.prizeRow}>
        <View
          style={[
            styles.prizeItem,
            {borderRightWidth: 1, borderColor: AppColors.palette.osloGrey},
          ]}>
          <Text style={styles.subText}>1st Prize</Text>
          <Text style={styles.valueText}>₹300</Text>
        </View>
        <View
          style={[
            styles.prizeItem,
            {borderRightWidth: 1, borderColor: AppColors.palette.osloGrey},
          ]}>
          <Text style={styles.subText}>Winners</Text>
          <Text style={styles.valueText}>
            <Icon name="trophy" size={14} color="white" /> 21%
          </Text>
        </View>
        <View style={styles.prizeItem}>
          <Text style={styles.subText}>Teams</Text>
          <Text style={styles.valueText}>
            <Icon name="users" size={14} color="white" /> up to 11
          </Text>
        </View>
      </View>

      {/* Progress Bar */}
      <Slider
        style={styles.progressBar}
        minimumValue={0}
        maximumValue={1}
        value={progress}
        minimumTrackTintColor="#FFA500"
        maximumTrackTintColor="#808080"
        thumbTintColor="transparent"
        // disabled={true}
      />

      {/* Spots Left */}
      <View style={styles.spotRow}>
        <Text style={styles.leftText}>1,343 Left</Text>
        <Text style={styles.totalSpots}>Spots: 2,000</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PoolCard;
