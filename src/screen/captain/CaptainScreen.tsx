import React from 'react';
import {View, Text, FlatList} from 'react-native';
import CaptainCard from '../../components/CaptainCard/CaptainCard';

import {styles} from './captainScreen-styles';

const playersData = [
  {
    id: '1',
    image: 'https://example.com/player1.jpg',
    name: 'J RODRIGUES',
    question: '42 runs or more?',
    points: 82,
  },
  {
    id: '2',
    image: 'https://example.com/player2.jpg',
    name: 'V KOHLI',
    question: '50 runs or more?',
    points: 100,
  },
  {
    id: '3',
    image: 'https://example.com/player3.jpg',
    name: 'R SHARMA',
    question: '60 runs or more?',
    points: 120,
  },
  {
    id: '4',
    image: 'https://example.com/player4.jpg',
    name: 'S SMITH',
    question: '30 runs or more?',
    points: 75,
  },
  {
    id: '5',
    image: 'https://example.com/player5.jpg',
    name: 'D WARNER',
    question: '35 runs or more?',
    points: 85,
  },
];

export default function CaptainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select C & VC</Text>
      <FlatList
        data={playersData}
        numColumns={2}
        // contentContainerStyle={{borderWidth: 1, borderColor: 'red'}}
        renderItem={({item, index}) => <CaptainCard player={item} index={index}/>}
      />
    </View>
  );
}
