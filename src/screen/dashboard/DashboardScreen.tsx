import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {fetchLiveMatchesDetails} from '../../features/matches/liveMatchesSlice';

import {styles} from './dashboard-styles';
import {useDispatch, useSelector} from 'react-redux';

export default function DashBoardScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [matchList, setMatchList] = useState([]);

  const liveMatchesList = useSelector(state => state.match);

  console.log('LIVE MATHC data : ', liveMatchesList);

  useEffect(() => {
    dispatch(fetchLiveMatchesDetails());
  }, []);

  useEffect(() => {
    if (liveMatchesList) {
      setMatchList(liveMatchesList?.data);
    }
  }, [liveMatchesList]);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.title}>Live</Text>
        <View style={styles.totalMatchContainer}>
          <Text style={styles.title}>2</Text>
        </View>
      </View>
      <FlatList
        data={matchList}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>There is no Live Matches</Text>
          </View>
        )}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('Question')}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardText}>{item?.seriesName || ''}</Text>
              <View
                style={{
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../assets/icons/profile.png')}
                  style={{height: 25, width: 25}}
                />
              </View>
            </View>
            <View style={styles.cardMiddleContainer}>
              <View style={styles.cardSubMiddleContainer}>
                <View style={styles.cardMatchContainer}>
                  <Image
                    source={require('../../assets/icons/profile.png')}
                    style={{height: 25, width: 25}}
                  />
                  <Text style={styles.subTitle}>{item?.team1?.teamSName}</Text>
                </View>
                <Text style={styles.cardText}>{item?.team1?.teamName}</Text>
              </View>
              <View style={styles.liveContainer}>
                <Text style={styles.liveText}>LIVE</Text>
              </View>
              <View style={styles.cardSubMiddleContainer}>
                <View style={styles.cardMatchContainer}>
                  <Text style={styles.subTitle}>{item?.team2?.teamSName}</Text>
                  <Image
                    source={require('../../assets/icons/profile.png')}
                    style={{height: 25, width: 25}}
                  />
                </View>
                <Text style={styles.cardText}>{item?.team2?.teamName}</Text>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <View style={styles.cardSubFooter}>
                <Text>UTK: 82/0 (6)</Text>
              </View>
              <Text numberOfLines={1} style={styles.matchInfo}>
                Uttarakhand need 49 runs in 14.0 remaining
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
