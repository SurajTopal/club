import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import MatchCard from '../../components/UpcomingMatchesCard/UpcomingMatchesCard';
import {liveMatchFetch} from '../../features/matches/liveMatchSlice';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './homeScreen-styles';

const matchData = [
  {
    id: '0ed85b00-1a44-4949-83c9-ff953f47dc1b',
    start_time: '2023-03-25T08:30:00.000Z',
    end_time: '2023-03-25T11:30:00.000Z',
    venue: 'Wankhede Stadium, Mumbai',
    title: 'Mumbai Indians vs Chennai Super Kings',
    team1_name: 'New Zealand',
    team1_sname: 'NZ',
    team2_name: 'India',
    team2_sname: 'IND',
    format: '50 overs',
    tournament_name: 'Champions Trophy 2025',
  },
  {
    id: '2b34c567-8d90-123e-456f-7890ghijklm4',
    start_time: '2023-05-15T14:00:00.000Z',
    end_time: '2023-05-15T17:00:00.000Z',
    venue: 'M. Chinnaswamy Stadium, Bengaluru',
    title: 'Royal Challengers Bangalore vs Rajasthan Royals',
    team1_name: 'Pakistan',
    team1_sname: 'PAK',
    team2_name: 'South Africa',
    team2_sname: 'SA',
    format: 'Test Match',
    tournament_name: 'ICC Test Championship 2025',
  },
  {
    id: '1a23b456-7c89-012d-345e-6789fghijklm',
    start_time: '2023-04-10T10:00:00.000Z',
    end_time: '2023-04-10T13:00:00.000Z',
    venue: 'Eden Gardens, Kolkata',
    title: 'Kolkata Knight Riders vs Delhi Capitals',
    team1_name: 'Australia',
    team1_sname: 'AUS',
    team2_name: 'England',
    team2_sname: 'ENG',
    format: 'T20',
    tournament_name: 'World Cup 2025',
  },
  {
    id: '2b34c567-8d90-123e-456f-7890ghijklm1',
    start_time: '2023-05-15T14:00:00.000Z',
    end_time: '2023-05-15T17:00:00.000Z',
    venue: 'M. Chinnaswamy Stadium, Bengaluru',
    title: 'Royal Challengers Bangalore vs Rajasthan Royals',
    team1_name: 'Pakistan',
    team1_sname: 'PAK',
    team2_name: 'South Africa',
    team2_sname: 'SA',
    format: 'Test Match',
    tournament_name: 'ICC Test Championship 2025',
  },
];

export default function HomeScreen() {
  const [liveMatchList, setLiveMatchList] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(liveMatchFetch());
  }, []);

  const liveMatches = useSelector(state => state?.liveMatch);

  useEffect(() => {
    if (liveMatches.data?.data) {
      setLiveMatchList(liveMatches?.data?.data);
    }
  }, [liveMatches]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Matches</Text>
      <FlatList
        data={liveMatchList}
        renderItem={({item}) => <MatchCard match={item} />}
      />
    </View>
  );
}
