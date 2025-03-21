import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import MatchCard from '../../components/UpcomingMatchesCard/UpcomingMatchesCard';
import BottomSheetComponent from '../../components/MoreAction/MoreAction';
import MyMatchCard from '../../components/MyMatchesCard/MyMatchesCard';
import {liveMatchFetch} from '../../features/matches/liveMatchSlice';
import {fetchMyMatches} from '../../features/matches/myMatchesSlice';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header/Header';
import {useAuth} from '../../auth-context';
import {Icon} from 'react-native-elements';
import {AppColors} from '../../theme';
import config from '../../config';

import {styles} from './homeScreen-styles';

export default function HomeScreen() {
  const [liveMatchList, setLiveMatchList] = useState();
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const [myMatchestList, myMatchesList] = useState([]);

  const {totalBalance} = useAuth();
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(liveMatchFetch());
    dispatch(fetchMyMatches());
  }, []);

  const myMatchReducer = useSelector(state => state.myMatches);

  console.log('Navitaion : ', navigation.getParent());

  useEffect(() => {
    if (myMatchReducer?.data?.data) {
      myMatchesList(myMatchReducer?.data?.data);
    }
  }, [myMatchReducer]);

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
        walletBalance={totalBalance}
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
          <TouchableOpacity
            style={styles.seeAllContainer}
            onPress={() => navigation.getParent()?.navigate('My Matches')}>
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
            data={myMatchestList}
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
