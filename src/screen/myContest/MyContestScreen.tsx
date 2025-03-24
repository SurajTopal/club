import {View, FlatList} from 'react-native';
import Tab from '../../components/Tab/Tab';
import TeamTab from '../../components/TeamTab/TeamTab';
import MyContestEndCard from '../../components/MyContestEndCard/MyContestEndCard';
import {fetchTeam} from '../../features/teamList/teamListSlice';
import {fetchMyContest} from '../../features/contest/userContestSlice';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useAuth} from '../../auth-context';

import {styles} from './myContestScreen-styles';

export default function MyContestScreen(props) {
  const {
    route: {
      params: {matchId},
    },
  } = props;

  const [contestList, setContestList] = useState([]);
  const tabOptions = ['Contest', 'Teams'];

  const dispatch = useDispatch();
  const {signOut} = useAuth();

  useEffect(() => {
    dispatch(fetchMyContest({matchId, signOut}));
    dispatch(fetchTeam({matchId, signOut}));
  }, []);

  const myContestReducer = useSelector(state => state?.myContest);

  useEffect(() => {
    if (myContestReducer?.data?.data) {
      setContestList(myContestReducer?.data?.data);
    }
  }, [myContestReducer]);

  const [selectedTab, setSelectedTab] = useState('Contest');
  return (
    <View style={styles.container}>
      <Tab
        tabOption={tabOptions}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabContainerStyle={{paddingHorizontal: 15}}
      />
      {selectedTab === 'Teams' && <TeamTab />}
      {selectedTab === 'Contest' && (
        <FlatList
          data={contestList}
          removeClippedSubviews={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => <MyContestEndCard contest={item} />}
          contentContainerStyle={{padding: 10}}
        />
      )}
    </View>
  );
}
