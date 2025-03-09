import React, {act, useEffect, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import PlayerQuestionCard from '../../components/PlayerQuestionCard/PlayerQuestionCard';
import {playerQuestionFetch} from '../../features/playerQuestion/playerQuestionSlice';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './batBallQuestionScreen-styles';
import PlayerBottomSheet from '../../components/PlayerBottomSheet/PlayerBottomSheet';

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

const BatBallQuestionScreen = props => {
  const {
    route: {
      params: {matchId},
    },
  } = props;

  const [activeTab, setActiveTab] = useState('Batters');
  const [playerQuestionList, setPlayerQuestionList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playerQuestionFetch(matchId));
  }, []);

  const playerQuestionReducer = useSelector(state => state?.playerQuestion);

  useEffect(() => {
    if (playerQuestionReducer?.data?.data) {
      setPlayerQuestionList(playerQuestionReducer?.data?.data);
    }
  }, [playerQuestionReducer]);

  console.log('Player List : ', playerQuestionList);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Answer for any 4 Players</Text>
        <View style={styles.groupButton}>
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              activeTab === 'Batters' && styles.activeButtonContainer,
            ]}
            onPress={() => setActiveTab('Batters')}>
            <Text
              style={[
                styles.buttonTitle,
                activeTab === 'Batters' && styles.activeButtonTitle,
              ]}>
              Batters
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              activeTab === 'Bowlers' && styles.activeButtonContainer,
            ]}
            onPress={() => setActiveTab('Bowlers')}>
            <Text
              style={[
                styles.buttonTitle,
                activeTab === 'Bowlers' && styles.activeButtonTitle,
              ]}>
              Bowlers
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={playerQuestionList}
          removeClippedSubviews={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <PlayerQuestionCard player={item} />}
        />
      </View>
      <PlayerBottomSheet />
    </View>
  );
};

export default BatBallQuestionScreen;
