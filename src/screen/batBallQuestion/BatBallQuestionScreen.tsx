import React from 'react';
import {View, FlatList, Text} from 'react-native';
import PlayerQuestionCard from '../../components/PlayerQuestionCard/PlayerQuestionCard';

import {styles} from './batBallQuestionScreen-styles';
import {AppColors} from '../../theme';

const playersData = [
  {
    name: 'Jess Jonassen',
    image: require('../../assets/icons/profile.png'),
    form: ['DNB', '5', '61*', 'DNB', '61*'],
    bets: [
      {runs: 14, yesPoints: 25, noPoints: 75},
      {runs: 44, yesPoints: 84, noPoints: 16},
    ],
  },
  {
    name: 'Player Two',
    image: require('../../assets/icons/profile.png'),
    form: ['10', '30', '45', 'DNB', '50'],
    bets: [
      {runs: 20, yesPoints: 40, noPoints: 60},
      {runs: 50, yesPoints: 70, noPoints: 30},
    ],
  },
];

const BatBallQuestionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Answer for any 4 Players</Text>
      <FlatList
        data={playersData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <PlayerQuestionCard player={item} />}
      />
    </View>
  );
};

export default BatBallQuestionScreen;
