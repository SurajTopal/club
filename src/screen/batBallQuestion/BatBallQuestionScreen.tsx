import React, {act, useEffect, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import PlayerQuestionCard from '../../components/PlayerQuestionCard/PlayerQuestionCard';
import {playerQuestionFetch} from '../../features/playerQuestion/playerQuestionSlice';
import PlayerBottomSheet from '../../components/PlayerBottomSheet/PlayerBottomSheet';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './batBallQuestionScreen-styles';
import {useNavigation} from '@react-navigation/native';

const BatBallQuestionScreen = props => {
  const {
    route: {
      params: {matchId},
    },
  } = props;

  const [activeTab, setActiveTab] = useState('Batters');
  const [playerQuestionList, setPlayerQuestionList] = useState([]);
  const [questionList, setQuestionList] = useState([]);

  const navigation = useNavigation();
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

  const handleNextButton = () => {
    navigation.navigate('Captain', {questionList: questionList});
  };
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
          renderItem={({item}) => (
            <PlayerQuestionCard
              player={item}
              setQuestionList={setQuestionList}
              questionList={questionList}
            />
          )}
        />
      </View>
      <PlayerBottomSheet
        questionList={questionList}
        setQuestionList={setQuestionList}
        handleNextButton={handleNextButton}
      />
    </View>
  );
};

export default BatBallQuestionScreen;
