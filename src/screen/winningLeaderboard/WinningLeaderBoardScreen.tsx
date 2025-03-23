import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Image} from 'react-native-elements';
import {winningListFetch} from '../../features/winningList/winningSlice';
import {fetchLeaderBoard} from '../../features/leaderBoard/leaderBoardSlice';
import {useDispatch, useSelector} from 'react-redux';
import Tab from '../../components/Tab/Tab';

import {styles} from './winningLeaderBoardScreen-styles';
import LeaderBoard from '../../components/leaderBoard/LeaderBoard';

export default function WinningLeaderBoardScreen(props) {
  const {
    route: {
      params: {contestId},
    },
  } = props;

  const options = ['Winnings', 'Leaderboard'];
  const [selectedTab, setSelectedTab] = useState('Winnings');
  const [winningData, setWinningData] = useState([]);
  const [leaderBoardData, setLeaderBoardData] = useState([]);
  const [isContestEnded, setIsContestEnded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(winningListFetch(contestId));
    dispatch(fetchLeaderBoard(contestId));
  }, []);

  const winningReducer = useSelector(state => state.winning);
  const leaderBoardReducer = useSelector(state => state.leaderBoard);

  console.log('LeaderBoard : ; ; ', leaderBoardReducer);

  useEffect(() => {
    if (winningReducer?.data) {
      setWinningData(winningReducer?.data?.data);
    }
  }, [winningReducer]);

  useEffect(() => {
    if (leaderBoardReducer?.data?.data) {
      setIsContestEnded(leaderBoardReducer?.data?.isContestEnded);
      setLeaderBoardData(leaderBoardReducer?.data?.data);
    }
  }, [leaderBoardReducer]);

  return (
    <View style={styles.container}>
      <Tab
        tabOption={options}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabContainerStyle={{paddingHorizontal: 15}}
      />
      <View style={styles.subContainer}>
        {selectedTab === 'Winnings' ? (
          <View style={styles.winningRow}>
            <Text style={styles.text}>Rank</Text>
            <Text style={styles.text}>Winnings</Text>
          </View>
        ) : !isContestEnded ? (
          <Text style={styles.allTeamText}>
            All Teams {`(${leaderBoardData?.length})`}
          </Text>
        ) : null}
        {!(isContestEnded && selectedTab === 'Leaderboard') && (
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
        )}
        {selectedTab === 'Leaderboard' && isContestEnded && (
          <LeaderBoard leaderboard={leaderBoardData} />
        )}
      </View>
    </View>
  );
}
