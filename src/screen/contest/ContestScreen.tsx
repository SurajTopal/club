import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, Image, ImageBackground} from 'react-native';
import PoolCard from '../../components/PoolCard/PoolCard';
import {fetchMyContest} from '../../features/contest/userContestSlice';
import {contestFetch} from '../../features/contest/contestSlice';
import {fetchTeam} from '../../features/teamList/teamListSlice';
import TeamCard from '../../components/TeamCard/TeamCard';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import {AppColors} from '../../theme';

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
    dispatch(fetchMyContest(matchId));
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
    if (myContestReducer?.data?.data) {
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
                <View
                  style={{
                    height: 300,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                      color: AppColors.bgColor,
                    }}>
                    There is no contest
                  </Text>
                </View>
              )}
              renderItem={({item, index}) => (
                <PoolCard
                  contestInfo={item}
                  index={index}
                  isMyContest={activeTab === 'My Contest'}
                />
              )}
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
