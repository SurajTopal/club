import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, ImageBackground, Dimensions} from 'react-native';
import PoolCard from '../../components/PoolCard/PoolCard';
import {fetchMyContest} from '../../features/contest/userContestSlice';
import MyContestCard from '../../components/MyContestCard/MyContestCard';
import {contestFetch} from '../../features/contest/contestSlice';
import {fetchTeam} from '../../features/teamList/teamListSlice';
import TeamCard from '../../components/TeamCard/TeamCard';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';

const {height} = Dimensions.get('screen');

import {styles} from './contestScreen-styles';

export default function ContestScreen(props) {
  const {
    route: {
      params: {matchId},
    },
  } = props;

  const [contestList, setContestList] = useState([]);
  const [myContest, setMyContest] = useState([]);
  const [teamList, setTeamList] = useState([]);
  const [activeTab, setActiveTab] = useState('Contest');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const tabOption = ['Contest', 'My Contest', 'My Teams'];

  useEffect(() => {
    dispatch(contestFetch(matchId));
    dispatch(fetchMyContest('0f022be8-ba52-4398-b316-992f7920c1ee'));
    dispatch(fetchTeam(matchId));
  }, [matchId]);

  const contestReducer = useSelector(state => state.allContest);
  const teamReducer = useSelector(state => state.teams);
  const myContestReducer = useSelector(state => state?.myContest);

  useEffect(() => {
    if (contestReducer?.data?.data) {
      setContestList(contestReducer?.data?.data);
    }
  }, [contestReducer]);

  useEffect(() => {
    if (teamReducer?.data) {
      setTeamList(teamReducer?.data || []);
    }
  }, [teamReducer]);

  useEffect(() => {
    if (myContestReducer?.data?.data 
      // && !myContestReducer?.data?.isMatchEnded
    ) {
      setMyContest(myContestReducer?.data?.data);
    }
  }, [myContestReducer]);

  return (
    <View style={styles.container}>
      <Tab
        tabOption={tabOption}
        selectedTab={activeTab}
        setSelectedTab={setActiveTab}
        tabContainerStyle={styles.tabContainer}
      />
      <View style={styles.subContainer}>
        {activeTab === 'My Teams' && (
          <>
            <FlatList
              data={teamList || []}
              removeClippedSubviews={false}
              renderItem={({item, index}) => {
                return (
                  <TeamCard
                    teamName={'Team Name' + (index + 1)}
                    playerDetails={item}
                    isEdit
                    onEdit={() =>
                      navigation.navigate('BatBallQuestion', {matchId: matchId})
                    }
                  />
                );
              }}
            />
            <Button
              title="Create Team"
              handleButtonPress={() =>
                navigation.navigate('BatBallQuestion', {
                  matchId: matchId,
                  isOnlyTeamCreation: true,
                })
              }
            />
          </>
        )}
        {(activeTab === 'My Contest' || activeTab === 'Contest') && (
          <>
            <FlatList
              data={activeTab == 'Contest' ? contestList : myContest}
              removeClippedSubviews={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item?.id?.toString()}
              ListEmptyComponent={() => (
                <View>
                  <ImageBackground
                    source={require('../../assets/images/myMatches.jpg')}
                    style={{
                      height: height * 0.7,
                      width: '100%',
                    }}>
                    <Text style={styles.matchText}>
                      {activeTab === 'Contest' ? 'All Contest' : 'Join Contest'}{' '}
                      will show here
                    </Text>
                  </ImageBackground>
                </View>
              )}
              renderItem={({item, index}) => {
                return activeTab === 'My Contest' ? (
                  <MyContestCard contestInfo={item} index={index} />
                ) : (
                  <PoolCard contestInfo={item} />
                );
              }}
              contentContainerStyle={{paddingBottom: 20}}
            />
            {activeTab === 'Contest' && (
              <Button
                title="Create Team"
                isIconVisible
                handleButtonPress={() =>
                  navigation.navigate('BatBallQuestion', {matchId: matchId})
                }
                buttonStyle={styles.createTeamButton}
              />
            )}
          </>
        )}
      </View>
    </View>
  );
}
