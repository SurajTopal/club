import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
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

const {height} = Dimensions.get('screen');

import {styles} from './homeScreen-styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const [liveMatchList, setLiveMatchList] = useState();
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const [myMatchestList, setMyMatchesList] = useState([]);

  const {totalBalance} = useAuth();
  const navigation = useNavigation();

  const {signOut} = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(liveMatchFetch(signOut));
    dispatch(fetchMyMatches(signOut));
  }, []);

  const myMatchReducer = useSelector(state => state.myMatches);

  useEffect(() => {
    if (myMatchReducer?.data?.data) {
      setMyMatchesList(myMatchReducer?.data?.data);
    }
  }, [myMatchReducer]);

  const liveMatches = useSelector(state => state?.liveMatch);

  useEffect(() => {
    if (liveMatches.data?.data) {
      setLiveMatchList(liveMatches?.data?.data);
    }
  }, [liveMatches]);

  const tokengenerate = async () => {
    await AsyncStorage.setItem(
      'authToken',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDI1NjM0NTgsImlkIjoiMDNlZDcyY2QtMzRlMC00ZjM0LThhYjgtNTcxM2ZlMjdlY2VlIiwicm9sZV9pZCI6InVzZXIifQ.38NHfA_nLrfcieTcCG2rKH1mAcU81Zp4yddOp1pYMyw',
    );
  };

  return (
    <View style={styles.container}>
      <Header
        title="Home"
        walletBalance={totalBalance}
        isWalletVisible={true}
        setIsVisible={setIsSheetVisible}
      />
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={() => tokengenerate()}>
          <Image
            source={require('../../assets/images/banner.png')}
            style={styles.bannerContainer}
          />
        </TouchableOpacity>
        {myMatchestList.length && (
          <>
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
          </>
        )}
        <Text style={styles.title}>Upcoming Matches</Text>
        <FlatList
          data={liveMatchList}
          removeClippedSubviews={false}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View>
              <ImageBackground
                source={require('../../assets/images/myMatches.jpg')}
                style={{
                  height: height * 0.3,
                  width: '100%',
                }}>
                <Text style={styles.matchText}>
                  Upcoming match will show here
                </Text>
              </ImageBackground>
            </View>
          )}
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
