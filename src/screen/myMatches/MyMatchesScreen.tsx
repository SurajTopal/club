import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MatchCard from '../../components/UpcomingMatchesCard/UpcomingMatchesCard';
import {fetchMyMatches} from '../../features/matches/myMatchesSlice';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';

const {width, height} = Dimensions.get('screen');

import {styles} from './myMatchesScreen-styles';

export default function MyMatchesScreen() {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const [tabData, setTabData] = useState([]);
  const tabOptions = ['Upcoming', 'Live', 'Completed'];

  const [myMatchestList, myMatchesList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyMatches());
  }, []);

  const myMatchReducer = useSelector(state => state.myMatches);

  useEffect(() => {
    if (myMatchReducer?.data?.data) {
      myMatchesList(myMatchReducer?.data?.data);
    }
  }, [myMatchReducer]);

  useEffect(() => {
    if (myMatchesList.length) {
      filterMatches(activeTab);
    }
  }, [activeTab, myMatchReducer]);

  const filterMatches = tab => {
    const now = moment(); // Current date and time

    let filteredMatches = myMatchestList?.filter(match => {
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
      <View style={styles.tabContainer}>
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
      </View>
      <FlatList
        data={tabData}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={false}
        ListEmptyComponent={() => (
          <View>
            <ImageBackground
              source={require('../../assets/images/myMatches.jpg')}
              style={{
                height: height * 0.7,
                width: '100%',
              }}>
              <Text style={styles.matchText}>
                Your {activeTab} match will show here{' '}
              </Text>
            </ImageBackground>
          </View>
        )}
        renderItem={({item}) => <MatchCard match={item} isMyMatch />}
      />
    </View>
  );
}
