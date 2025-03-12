import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import MatchCard from '../../components/UpcomingMatchesCard/UpcomingMatchesCard';
import moment from 'moment';

import {styles} from './myMatchesScreen-styles';
import Tab from '../../components/Tab/Tab';

const matchData = [
  {
    id: '0ed85b00-1a44-4949-83c9-ff953f47dc1b',
    start_time: '2025-03-12T8:30:00.000Z',
    end_time: '2025-03-12T11:30:00.000Z',
    venue: 'Wankhede Stadium, Mumbai',
    title: 'Mumbai Indians vs Chennai Super Kings',
    team1_name: 'New Zealand',
    team1_sname: 'NZ',
    team2_name: 'India',
    team2_sname: 'IND',
    match_format: '50 overs',
    tournament_name: 'Champions Trophy 2025',
  },
  {
    id: '2b34c567-8d90-123e-456f-7890ghijklm4',
    start_time: '2025-03-13T14:00:00.000Z',
    end_time: '2025-05-15T17:00:00.000Z',
    venue: 'M. Chinnaswamy Stadium, Bengaluru',
    title: 'Royal Challengers Bangalore vs Rajasthan Royals',
    team1_name: 'Pakistan',
    team1_sname: 'PAK',
    team2_name: 'South Africa',
    team2_sname: 'SA',
    match_format: 'Test Match',
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
    match_format: 'T20',
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
    match_format: 'Test Match',
    tournament_name: 'ICC Test Championship 2025',
  },
];

export default function MyMatchesScreen() {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const [tabData, setTabData] = useState([]);
  const tabOptions = ['Upcoming', 'Live', 'Completed'];

  useEffect(() => {
    filterMatches(activeTab);
  }, [activeTab]);

  const filterMatches = tab => {
    const now = moment(); // Current date and time

    let filteredMatches = matchData.filter(match => {
      const startTime = moment(match.start_time);
      const endTime = moment(match.end_time);

      if (tab === 'Upcoming') {
        return startTime.isAfter(now, 'minute'); // Only future matches
      } else if (tab === 'Live') {
        return (
          startTime.isSameOrBefore(now, 'minute') &&
          endTime.isAfter(now, 'minute')
        ); // Ongoing matches
      } else if (tab === 'Completed') {
        return endTime.isBefore(now, 'minute'); // Past matches
      }
    });

    setTabData(filteredMatches);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Matches</Text>
      {/* <View style={styles.tabContainer}>
        {tabOptions.map(tabName => (
          <TouchableOpacity
            onPress={() => setActiveTab(tabName)}
            style={[
              styles.tabSubContainer,
              tabName === activeTab && styles.activeTabContainer,
            ]}>
            <Text
              style={[
                styles.tabName,
                tabName === activeTab && styles.activeTabName,
              ]}>
              {tabName}
            </Text>
          </TouchableOpacity>
        ))}
      </View> */}
      <Tab
        tabOption={tabOptions}
        selectedTab={activeTab}
        setSelectedTab={setActiveTab}
      />
      <FlatList
        data={tabData}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={false}
        renderItem={({item}) => <MatchCard match={item} isMyMatch />}
      />
    </View>
  );
}
