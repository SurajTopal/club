import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import PlayerQuestionCard from '../../components/PlayerQuestionCard/PlayerQuestionCard';
import {playerQuestionFetch} from '../../features/playerQuestion/playerQuestionSlice';
import PlayerBottomSheet from '../../components/PlayerBottomSheet/PlayerBottomSheet';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useAuth} from '../../auth-context';
import {AppColors} from '../../theme';

import {styles} from './batBallQuestionScreen-styles';

const BatBallQuestionScreen = props => {
  const {
    route: {
      params: {matchId, contestId, isOnlyTeamCreation = false},
    },
  } = props;

  const [activeTab, setActiveTab] = useState('batsman');
  const [playerQuestionList, setPlayerQuestionList] = useState([]);
  const [questionList, setQuestionList] = useState([]);

  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const {signOut} = useAuth();

  // Fetch player questions on mount
  useEffect(() => {
    dispatch(playerQuestionFetch({matchId, signOut}));
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
      contestId: contestId || '',
      isOnlyTeamCreation: isOnlyTeamCreation || false,
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
              activeTab === 'batsman' && styles.activeButtonContainer,
            ]}
            onPress={() => setActiveTab('batsman')}>
            <Text
              style={[
                styles.buttonTitle,
                activeTab === 'batsman' && styles.activeButtonTitle,
              ]}>
              Batsman
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              activeTab === 'bowler' && styles.activeButtonContainer,
            ]}
            onPress={() => setActiveTab('bowler')}>
            <Text
              style={[
                styles.buttonTitle,
                activeTab === 'bowler' && styles.activeButtonTitle,
              ]}>
              Bowler
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={
            activeTab === 'batsman'
              ? playerQuestionList.filter(
                  player => player.player_type === 'batsman',
                )
              : playerQuestionList?.filter(
                  player => player.player_type === 'bowler',
                )
          }
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>There is no {activeTab} </Text>
            </View>
          )}
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
