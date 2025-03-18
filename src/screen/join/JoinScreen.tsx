import React, {useEffect, useState} from 'react';
import ContestBottomSheet from '../../features/joinBottomSheet/JoinBottomSheet';
import {fetchLeaderBoard} from '../../features/leaderBoard/leaderBoardSlice';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {winningListFetch} from '../../features/winningList/winningSlice';
import {joinContest} from '../../features/joinContest/joinContestSlice';
import Check from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Slider from '@react-native-community/slider';
import Button from '../../components/Button/Button';
import {Icon} from 'react-native-elements';
import {AppColors} from '../../theme';

import {styles} from './joinScreen-styles';

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
        contestId,
        teamId,
        isJoin,
      },
    },
  } = props;

  const tabOption = ['Winnings', 'Leaderboard'];
  const [selectedTab, setSelectedTab] = useState('Winnings');
  const [winningData, setWinningData] = useState([]);
  const [leaderBoardData, setLeaderBoardData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(winningListFetch('a88a600f-e5c9-4d1e-af9d-443fffc7a712'));
    dispatch(fetchLeaderBoard());
  }, []);

  const winningReducer = useSelector(state => state.winning);
  const leaderBoardReducer = useSelector(state => state.leaderBoard);

  useEffect(() => {
    if (winningReducer?.data) {
      setWinningData(winningReducer?.data?.data);
    }
  }, [winningReducer]);

  useEffect(() => {
    if (leaderBoardReducer?.data?.data) {
      setLeaderBoardData(leaderBoardReducer?.data?.data);
    }
  }, [leaderBoardReducer]);

  const handleJoin = () => {
    if (contestId && teamId && isJoin) {
      setIsVisible(true);
    } else {
      navigation.navigate('Team', {contestId: contestId});
    }
  };

  const handleJoinButton = () => {
    const formatData = {
      contest_id: contestId,
      user_team_ids: [teamId],
    };
    dispatch(joinContest({formatData, navigation}));
    setIsVisible(false);
  };

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

        <Button title={`Join ₹${currentFee}`} handleButtonPress={handleJoin} />
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
        <Text style={styles.allTeamText}>
          All Teams {`(${leaderBoardData?.length})`}
        </Text>
      )}
      <FlatList
        data={selectedTab === 'Winnings' ? winningData : leaderBoardData}
        removeClippedSubviews={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => 'Prize' + index.toString()}
        renderItem={({item, index}) => {
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
                <Text style={styles.name}>{item?.user_name}</Text>
                <View style={styles.leaderboardSubContainer}>
                  <Text style={styles.title}>T{+item?.teamindex}</Text>
                </View>
              </View>
            );
        }}
      />
      <ContestBottomSheet
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        handleJoinButton={handleJoinButton}
      />
    </View>
  );
};

export default JoinScreen;
