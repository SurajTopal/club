import React from 'react';
import {View, Text, FlatList} from 'react-native';
import TeamCard from '../TeamCard/TeamCard';

export default function TeamTab() {

  return (
    <View>
      <FlatList
        data={teamList || []}
        removeClippedSubviews={false}
        renderItem={({item, index}) => {
          return (
            <TeamCard
              teamName={'Team Name ' + (index + 1)}
              playerDetails={item}
              onEdit={() => {}}
            />
          );
        }}
      />
    </View>
  );
}
