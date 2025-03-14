import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import MatchCard from '../../components/UpcomingMatchesCard/UpcomingMatchesCard';
import BottomSheetComponent from '../../components/MoreAction/MoreAction';
import MyMatchCard from '../../components/MyMatchesCard/MyMatchesCard';
import {liveMatchFetch} from '../../features/matches/liveMatchSlice';
import {useDispatch, useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';
import {AppColors} from '../../theme';

import {styles} from './homeScreen-styles';
import Header from '../../components/Header/Header';

const matches = [
  {
    key: '1',
    team1: 'MUM-W',
    team2: 'GJ-W',
    team1Logo: 'https://example.com/mum-logo.png',
    team2Logo: 'https://example.com/gj-logo.png',
    date: 'Tomorrow',
    time: '7:30 PM',
  },
  {
    key: '2',
    team1: 'DEL-W',
    team2: 'TBC',
    team1Logo: 'https://example.com/del-logo.png',
    team2Logo: 'https://example.com/tbc-logo.png',
    date: '15 Mar',
    time: '7:30 PM',
  },
];

export default function HomeScreen() {
  const [liveMatchList, setLiveMatchList] = useState();
  const [isSheetVisible, setIsSheetVisible] = useState(false);

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
      <Header
        title="Home"
        isDrawer
        walletBalance={56565}
        isWalletVisible={true}
        setIsVisible={setIsSheetVisible}
      />
      <View style={styles.subContainer}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/banner.png')}
            style={styles.bannerContainer}
          />
        </TouchableOpacity>
        <View style={styles.myMatchesContainer}>
          <Text style={styles.title}>My Matches</Text>
          <TouchableOpacity style={styles.seeAllContainer} onPress={() => {}}>
            <Text style={styles.seeAllText}>See all</Text>
            <Icon
              name="chevron-right"
              type="entypo"
              color={AppColors.palette.greenWhite}
            />
          </TouchableOpacity>
        </View>
        <View style={{height: 150}}>
          <FlatList
            data={matches}
            horizontal
            removeClippedSubviews={false}
            contentContainerStyle={{margin: 0}}
            renderItem={({item}) => <MyMatchCard {...item} />}
          />
        </View>
        <Text style={styles.title}>Upcoming Matches</Text>
        <FlatList
          data={liveMatchList}
          removeClippedSubviews={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <MatchCard match={item} />}
        />
      </View>
      <BottomSheetComponent
        isVisible={isSheetVisible}
        toggleSheet={() => setIsSheetVisible(false)}
      />
    </View>
  );
}
