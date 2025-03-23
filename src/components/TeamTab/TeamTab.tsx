import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import TeamCard from '../TeamCard/TeamCard';
import {useSelector} from 'react-redux';

export default function TeamTab() {
  const [teamList, setTeamList] = useState([]);

  const teamReducer = useSelector(state => state.teams);

  useEffect(() => {
    if (teamReducer?.data) {
      setTeamList(teamReducer?.data || []);
    }
  }, [teamReducer]);

  return (
    <View style={{}}>
      <FlatList
        data={teamList || []}
        removeClippedSubviews={false}
        renderItem={({item, index}) => {
          return (
            <TeamCard
              teamName={'Team Name ' + (index + 1)}
              playerDetails={item}
            />
          );
        }}
      />
    </View>
  );
}
