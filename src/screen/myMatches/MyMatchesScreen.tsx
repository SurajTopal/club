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

const {height} = Dimensions.get('screen');

import {styles} from './myMatchesScreen-styles';

export default function MyMatchesScreen() {
  const [activeTab, setActiveTab] = useState('Active Matches');
  const [tabData, setTabData] = useState([]);
  const tabOptions = ['Active Matches', 'Completed Matches'];

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
    let filteredMatches = myMatchestList?.filter(match => {
      if (tab === 'Active Matches') {
        return match?.is_settled === false; 
      }
      return match?.is_settled === true;
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
