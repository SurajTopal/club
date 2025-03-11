import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import PlayerQuestionCard from '../../components/PlayerQuestionCard/PlayerQuestionCard';
import {playerQuestionFetch} from '../../features/playerQuestion/playerQuestionSlice';
import PlayerBottomSheet from '../../components/PlayerBottomSheet/PlayerBottomSheet';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './batBallQuestionScreen-styles';
import {AppColors} from '../../theme';

const BatBallQuestionScreen = props => {
  const {
    route: {
      params: {matchId},
    },
  } = props;

  const [activeTab, setActiveTab] = useState('Batters');
  const [playerQuestionList, setPlayerQuestionList] = useState([]);
  const [questionList, setQuestionList] = useState([]);

  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  // Fetch player questions on mount
  useEffect(() => {
    dispatch(playerQuestionFetch(matchId));
  }, [dispatch, matchId]);

  const playerQuestionReducer = useSelector(state => state?.playerQuestion);

  useEffect(() => {
    if (playerQuestionReducer?.data?.data?.data) {
      setPlayerQuestionList(playerQuestionReducer?.data?.data?.data);
    }
  }, [playerQuestionReducer]);

  const handleNextButton = () => {
    navigation.navigate('Captain', {
      questionList: questionList,
      matchId: matchId,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text
          style={[
            styles.title,
            questionList?.length === 4 && {
              color: AppColors.palette.lightLimeGreen,
            },
          ]}>
          {questionList.length == 0
            ? 'Answer for any 4 Players'
            : questionList.length === 4
            ? 'You are Ready to go !'
            : `${4 - questionList.length} more answer to go`}
        </Text>
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
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => 'question' + index} // Ensure unique key
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
