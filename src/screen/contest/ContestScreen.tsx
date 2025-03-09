import React from 'react';
import {View, Text, FlatList} from 'react-native';
import PoolCard from '../../components/PoolCard/PoolCard';

import {styles} from './contestScreen-styles';

export default function ContestScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Contest</Text>
      <FlatList
        data={[1, 3, 3, 4, 4, 4]}
        renderItem={() => <PoolCard />}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </View>
  );
}
