import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {winningListFetch} from '../../features/winningList/winningSlice';
import Check from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import Slider from '@react-native-community/slider';
import Button from '../../components/Button/Button';
import {Icon} from 'react-native-elements';
import {AppColors} from '../../theme';

import {styles} from './joinScreen-styles';

// const winningsData = [
//   {rank: '# 1', amount: '₹10,000'},
//   {rank: '# 2', amount: '₹2,500'},
//   {rank: '# 3', amount: '₹1,000'},
//   {rank: '# 4', amount: '₹500'},
//   {rank: '# 5', amount: '₹350'},
//   {rank: '# 6 - 7', amount: '₹250'},
//   {rank: '# 8 - 9', amount: '₹100'},
//   {rank: '# 10 - 11', amount: '₹50'},
//   {rank: '# 12 - 20', amount: '₹20'},
//   {rank: '# 21 - 30', amount: '₹10'},
// ];

const leaderboardData = [
  {name: 'Rohit Singh', type: 'T4'},
  {name: 'Suraj Topal', type: 'T1'},
  {name: 'Hemant Kumar', type: 'T11'},
  {name: 'Ram Singh', type: 'T3'},
  {name: 'Reena', type: 'T8'},
  {name: 'Harry', type: 'T12'},
  {name: 'Mohit Kumar Singh', type: 'T5'},
];

const JoinScreen = props => {
  const {
    route: {
      params: {
        matchId,
        maxPoolSize,
        totalSpots,
        winnerPercentage,
        categoryName,
        remainingSpots,
        progress,
        firstPrice,
        totalTeam,
        currentFee,
      },
    },
  } = props;

  const tabOption = ['Winnings', 'Leaderboard'];
  const [selectedTab, setSelectedTab] = useState('Winnings');
  const [winningData, setWinningData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(winningListFetch('a88a600f-e5c9-4d1e-af9d-443fffc7a712'));
  }, []);

  const winningReducer = useSelector(state => state.winning);

  useEffect(() => {
    if (winningReducer?.data) {
      setWinningData(winningReducer?.data?.data);
    }
  }, [winningReducer]);

  return (
    <View style={styles.container}>
      {/* Prize Pool Card */}
      <View style={styles.prizeCard}>
        <Text style={styles.prizeTitle}>
          <Check
            name="check-decagram-outline"
            color={AppColors.palette.lightLimeGreen}
            size={20}
          />{' '}
          {categoryName}
        </Text>
        <Text style={styles.prizeAmount}>₹{maxPoolSize}</Text>
        <View style={styles.prizeRow}>
          <View
            style={[
              styles.prizeItem,
              {borderRightWidth: 1, borderColor: AppColors.palette.osloGrey},
            ]}>
            <Text style={styles.subText}>1st Prize</Text>
            <Text style={styles.valueText}>₹{firstPrice}</Text>
          </View>
          <View
            style={[
              styles.prizeItem,
              {borderRightWidth: 1, borderColor: AppColors.palette.osloGrey},
            ]}>
            <Text style={styles.subText}>Winners</Text>
            <Text style={styles.valueText}>
              <Icon type="entypo" name="trophy" size={14} color="white" />
              {winnerPercentage}%
            </Text>
          </View>
          <View style={styles.prizeItem}>
            <Text style={styles.subText}>Teams</Text>
            <Text style={styles.valueText}>
              <Icon type="entypo" name="users" size={14} color="white" /> up to
              {totalTeam}
            </Text>
          </View>
        </View>

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

        <View style={styles.spotContainer}>
          <Text style={styles.text}>{remainingSpots} Left</Text>
          <Text style={styles.text}>Spots: {totalSpots}</Text>
        </View>

        <Button title={`Join ₹${currentFee}`} handleButtonPress={() => {}} />
      </View>

      {/* Winnings Section */}
      <View style={styles.tabContainer}>
        {tabOption.map(name => (
          <TouchableOpacity
            style={styles.subTabContainer}
            onPress={() => setSelectedTab(name)}>
            <Text
              style={[
                styles.tabTitle,
                name === selectedTab && styles.tabActiveTitle,
              ]}>
              {name}
            </Text>
            <View
              style={[styles.tab, name === selectedTab && styles.activeTab]}
            />
          </TouchableOpacity>
        ))}
      </View>

      {selectedTab === 'Winnings' ? (
        <View style={styles.winningRow}>
          <Text style={styles.text}>Rank</Text>
          <Text style={styles.text}>Winnings</Text>
        </View>
      ) : (
        <Text style={styles.allTeamText}>All Teams {`(235)`}</Text>
      )}
      <FlatList
        data={selectedTab === 'Winnings' ? winningData : leaderboardData}
        removeClippedSubviews={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => 'Prize' + index.toString()}
        renderItem={({item}) => {
          if (selectedTab === 'Winnings')
            return (
              <View style={styles.winningRow}>
                <Text style={styles.rankAmount}>
                  #{' '}
                  {item.min_rank === item?.max_rank
                    ? item?.min_rank
                    : `${item?.min_rank} - ${item?.max_rank}`}
                </Text>
                <Text style={styles.rankAmount}>{item?.prize_amount}</Text>
              </View>
            );
          else
            return (
              <View style={styles.leaderboardRow}>
                <Image
                  source={require('../../assets/icons/profile.png')}
                  style={{height: 40, width: 40, borderRadius: 30}}
                />
                <Text style={styles.name}>{item?.name}</Text>
                <View style={styles.leaderboardSubContainer}>
                  <Text style={styles.title}>{item?.type}</Text>
                </View>
              </View>
            );
        }}
      />
    </View>
  );
};

export default JoinScreen;
