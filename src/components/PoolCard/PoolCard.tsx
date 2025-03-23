import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import {AppColors} from '../../theme';
import {useAuth} from '../../auth-context';
import {useSelector} from 'react-redux';

import {styles} from './poolCard-styles';

const PoolCard = props => {
  const {contestInfo} = props;
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
    category_name,
    is_active,
    has_ended,
  } = contestInfo;

  const totalSpots = total_spots;
  const remainingSpots = totalSpots - filled_spots;
  const progress = (totalSpots - remainingSpots) / totalSpots;
  const winnerPercentage = (total_winners / total_spots) * 100;
  const [joinScreenData, setJoinScreenData] = useState({});
  const navigation = useNavigation<any>();

  const {setContestData} = useAuth();

  const [allTeam, setAllTeam] = useState([]);

  const teamReducer = useSelector(state => state.teams);

  useEffect(() => {
    if (teamReducer?.data) {
      setAllTeam(teamReducer?.data || []);
    }
  }, [teamReducer]);

  useEffect(() => {
    setJoinScreenData({
      matchId: match_id,
      maxPoolSize: max_pool_size,
      totalSpots: total_spots,
      remainingSpots: remainingSpots,
      winnerPercentage: winnerPercentage,
      categoryName: category_name,
      firstPrice: first_price,
      currentFee: current_entry_fee,
      totalTeam: total_allowed_team,
      progress: progress,
    });
  }, []);

  const handleContestData = () => {
    setContestData({
      matchId: match_id,
      maxPoolSize: max_pool_size,
      totalSpots: total_spots,
      remainingSpots: remainingSpots,
      winnerPercentage: winnerPercentage,
      categoryName: category_name,
      firstPrice: first_price,
      currentFee: current_entry_fee,
      totalTeam: total_allowed_team,
      progress: progress,
    });
  };

  const handleContest = () => {
    handleContestData();
    if (allTeam.length > 1) {
      navigation.navigate('Team', {
        contestId: id,
        currentFee: current_entry_fee,
      });
    } else if (allTeam.length === 0) {
      navigation.navigate('BatBallQuestion', {
        matchId: match_id,
        contestId: id,
      });
    } else if (allTeam.length === 1) {
      navigation.navigate('Join', {
        ...joinScreenData,
        contestId: id,
        teamId: allTeam[0]?.team_id,
        isJoin: true,
      });
    }
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.subCard}
        onPress={() => {
          handleContestData();

          if (allTeam?.length === 1) {
            navigation.navigate('Join', {
              ...joinScreenData,
              contestId: id,
              teamId: allTeam[0]?.team_id,
              isJoin: true,
            });
          } else {
            navigation.navigate('Join', {
              ...joinScreenData,
              isJoin: false,
              contestId: id,
            });
          }
        }}>
        {/* Pool Type and Discount */}
        <View style={styles.headerRow}>
          <View style={styles.flexRow}>
            <Icon
              name="line-chart"
              size={14}
              color={AppColors.palette.lightLimeGreen}
            />
            <Text style={styles.flexiblePool}>{category_name}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {entry_fee !== current_entry_fee && (
              <Text style={styles.strikeThrough}>₹{entry_fee}</Text>
            )}
            <TouchableOpacity
              onPress={handleContest}
              style={{
                paddingVertical: 5,
                paddingHorizontal: 15,
                borderWidth: 1,
                borderColor: AppColors.palette.osloGrey,
                borderRadius: 5,
                marginLeft: 5,
              }}>
              <Text style={styles.discount}>
                ₹{current_entry_fee || entry_fee}
              </Text>
            </TouchableOpacity>
          </View>
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
    </View>
  );
};

export default PoolCard;
