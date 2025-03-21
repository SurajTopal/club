import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native-elements';
import {FlatList} from 'react-native-reanimated/lib/typescript/Animated';
import { winningListFetch } from '../../features/winningList/winningSlice';
import { fetchLeaderBoard } from '../../features/leaderBoard/leaderBoardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { styles } from './winningLeaderBoardTab-styles';

export default function WinningLeaderBoardTab() {
  const tabOption = ['Winnings', 'Leaderboard'];
  const [selectedTab, setSelectedTab] = useState('Winnings');
  const [winningData, setWinningData] = useState([]);
  const [leaderBoardData, setLeaderBoardData] = useState([]);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(winningListFetch(contestId);
    dispatch(fetchLeaderBoard(contestId));
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

  return (
    <View>
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
    </View>
  );
}
