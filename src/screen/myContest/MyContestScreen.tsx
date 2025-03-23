import {View, FlatList} from 'react-native';
import Tab from '../../components/Tab/Tab';
import TeamTab from '../../components/TeamTab/TeamTab';
import MyContestEndCard from '../../components/MyContestEndCard/MyContestEndCard';
import {fetchTeam} from '../../features/teamList/teamListSlice';
import {fetchMyContest} from '../../features/contest/userContestSlice';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './myContestScreen-styles';

const contests = [
  {
    id: '1',
    firstPrize: 800,
    totalPrizePool: '₹7,418',
    entryFee: 21,
    winnerPercentage: 41,
    maxTeams: 11,
    teams: [
      {id: 'T1', username: 'SHARA10044YZ', score: 190, rank: 105, winnings: 25},
      {
        id: 'T2',
        username: 'SHARA10044YZ',
        score: 127.5,
        rank: 219,
        winnings: 0,
      },
    ],
  },
  {
    id: '2',
    firstPrize: 30,
    totalPrizePool: '₹2,575',
    entryFee: 15,
    winnerPercentage: 42,
    maxTeams: 11,
    teams: [
      {id: 'T1', username: 'SHARA10044YZ', score: 190, rank: 40, winnings: 30},
    ],
  },
];

export default function MyContestScreen(props) {
  const {
    route: {
      params: {matchId},
    },
  } = props;

  const [contestList, setContestList] = useState([]);
  const tabOptions = ['Contest', 'Teams'];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyContest(matchId));
    dispatch(fetchTeam(matchId));
  }, []);

 const myContestReducer = useSelector(state => state?.myContest);


  useEffect(() => {
    if (myContestReducer?.data?.data) {
      setContestList(myContestReducer?.data?.data);
    }
  }, [myContestReducer]);

  const [selectedTab, setSelectedTab] = useState('Contest');
  return (
    <View style={styles.container}>
      <Tab
        tabOption={tabOptions}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabContainerStyle={{paddingHorizontal: 15}}
      />
      {selectedTab === 'Teams' && <TeamTab />}
      {selectedTab === 'Contest' && (
        <FlatList
          data={contestList}
          removeClippedSubviews={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => <MyContestEndCard contest={item} />}
          contentContainerStyle={{padding: 10}}
        />
      )}
    </View>
  );
}
