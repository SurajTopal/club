import React, {useEffect, useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import PoolCard from '../../components/PoolCard/PoolCard';
import {contestFetch} from '../../features/contest/contestSlice';
import {fetchTeam} from '../../features/teamList/teamListSlice';
import TeamCard from '../../components/TeamCard/TeamCard';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';

import {styles} from './contestScreen-styles';

const samplePlayers = [
  {
    id: '1',
    name: 'Y BHATIA',
    image: 'https://example.com/y_bhatia.png',
    stat: '9 runs or more?',
    prediction: 'Y',
    points: 15,
    role: 'C',
  },
  {
    id: '2',
    name: 'B MOONEY',
    image: 'https://example.com/b_mooney.png',
    stat: '23 runs or more?',
    prediction: 'Y',
    points: 26,
    role: null,
  },
  {
    id: '3',
    name: 'H MATTHEWS',
    image: 'https://example.com/h_matthews.png',
    stat: '27 runs or more?',
    prediction: 'N',
    points: 51,
    role: null,
  },
  {
    id: '4',
    name: 'T KANWAR',
    image: 'https://example.com/t_kanwar.png',
    stat: '1 wicket or more?',
    prediction: 'N',
    points: 59,
    role: 'VC',
  },
];

export default function ContestScreen(props) {
  const {
    route: {
      params: {matchId},
    },
  } = props;

  const [contestList, setContestList] = useState([]);
  const [teamList, setTeamList] = useState([]);
  const [activeTab, setActiveTab] = useState('Contest');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const tabOption = ['Contest', 'My Contest', 'My Teams'];

  useEffect(() => {
    dispatch(contestFetch(matchId));
    dispatch(fetchTeam(matchId));
  }, [matchId]);

  const contestReducer = useSelector(state => state.allContest);
  const teamReducer = useSelector(state => state.teams);

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

  console.log('ContList : ', contestList);

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
              data={teamList}
              removeClippedSubviews={false}
              renderItem={({item, index}) => {
                const {} = item;
                return (
                  <TeamCard
                    teamName="Team Name1"
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
                navigation.navigate('BatBallQuestion', {matchId: matchId})
              }
            />
          </>
        )}

        {(activeTab === 'My Contest' || activeTab === 'Contest') && (
          <FlatList
            data={contestList}
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
                <Text style={{backgroundColor: 'red'}}>Hello</Text>
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
        )}
      </View>
    </View>
  );
}
