import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import PoolCard from '../../components/PoolCard/PoolCard';
import {contestFetch} from '../../features/contest/contestSlice';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './contestScreen-styles';

export default function ContestScreen(props) {
  const {
    route: {
      params: {matchId},
    },
  } = props;

  const [contestList, setContestList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contestFetch(matchId));
  }, [matchId]);

  const contestReducer = useSelector(state => state.allContest);

  useEffect(() => {
    if (contestReducer?.data?.data) {
      setContestList(contestReducer?.data?.data);
    }
  }, [contestReducer]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Contest</Text>
      <FlatList
        data={contestList}
        removeClippedSubviews={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item?.id?.toString()}
        renderItem={({item, index}) => (
          <PoolCard contestInfo={item} index={index} />
        )}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </View>
  );
}
