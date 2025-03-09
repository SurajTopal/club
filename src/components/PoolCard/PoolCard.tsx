import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import {AppColors} from '../../theme';

import {styles} from './poolCard-styles';


const PoolCard = props => {
  const {contestInfo, index} = props;
  const {
    id,
    match_id,
    title,
    entry_fee,
    current_entry_fee,
    current_pool_size,
    max_pool_size,
    first_price,
    total_spots,
    min_spots,
    filled_spots,
    is_spawnable,
    start_time,
    end_time,
    created_at,
    brand_id,
    total_allowed_team,
    total_winners,
    category_id,
    is_active,
    has_ended,
  } = contestInfo;

  const totalSpots = total_spots;
  const remainingSpots = totalSpots - filled_spots;
  const progress = (totalSpots - remainingSpots) / totalSpots;
  const winnerPercentage = (total_winners / total_spots) * 100;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('BatBallQuestion', {matchId: match_id})
      }>
      {/* Pool Type and Discount */}
      <View style={styles.headerRow}>
        <View style={styles.flexRow}>
          <Icon name="line-chart" size={14} color="lightgreen" />
          <Text style={styles.flexiblePool}>{title}</Text>
        </View>
        <Text style={styles.discount}>
          <Text style={styles.strikeThrough}>₹{entry_fee}</Text> ₹
          {current_entry_fee}
        </Text>
      </View>

      {/* Pool Amount */}
      <Text style={styles.poolAmount}>₹{max_pool_size}</Text>

      {/* Prize Details */}
      <View style={styles.prizeRow}>
        <View
          style={[
            styles.prizeItem,
            {borderRightWidth: 1, borderColor: AppColors.palette.osloGrey},
          ]}>
          <Text style={styles.subText}>1st Prize</Text>
          <Text style={styles.valueText}>₹{first_price}</Text>
        </View>
        <View
          style={[
            styles.prizeItem,
            {borderRightWidth: 1, borderColor: AppColors.palette.osloGrey},
          ]}>
          <Text style={styles.subText}>Winners</Text>
          <Text style={styles.valueText}>
            <Icon name="trophy" size={14} color="white" /> {winnerPercentage}%
          </Text>
        </View>
        <View style={styles.prizeItem}>
          <Text style={styles.subText}>Teams</Text>
          <Text style={styles.valueText}>
            <Icon name="users" size={14} color="white" /> up to{' '}
            {total_allowed_team}
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
        <Text style={styles.leftText}>{total_spots - filled_spots} Left</Text>
        <Text style={styles.totalSpots}>Spots: {total_spots}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PoolCard;
