import React, {useEffect, useState} from 'react';
import {fetchLiveQuestions} from '../../features/matches/liveMatchesQuestionSlice';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './questionScreen-styles';

const MatchCard = ({match}) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity style={styles.cardContainer}>
      {/* <View style={styles.headerContainer}>
      <View style={styles.subHeaderContainer}>
        <View style={styles.matchContainer}>
          <Image
            source={require('../../assets/icons/profile.png')}
            style={styles.teamIcon}
          />
          <Text style={styles.matchText}>{match.team1}</Text>
        </View>
        <Text style={styles.vsText}>VS</Text>
        <View style={styles.matchContainer}>
          <Text style={styles.matchText}>{match.team2}</Text>
          <Image
            source={require('../../assets/icons/profile.png')}
            style={styles.teamIcon}
          />
        </View>
      </View>
      <Text style={styles.cardText}>/</Text>
      <View>
        <Text style={styles.cardText}>{match.trades}</Text>
      </View>
    </View> */}
      <Text style={styles.questionText}>{match.Question}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.greenButton}
          onPress={() =>
            navigation.navigate('AddOrder', {
              questionDetails: {...match, slide: 'Yes'},
            })
          }>
          <Text style={styles.greenButtonTitle}>Yes {match.yesPrice}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.redButton}
          onPress={() =>
            navigation.navigate('AddOrder', {
              questionDetails: {...match, slide: 'No'},
            })
          }>
          <Text style={styles.redButtonTitle}>No {match.noPrice}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const QuestionScreen = props => {
  const {
    route: {
      params: {matchId},
    },
  } = props;

  const [questionList, setQuestionList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLiveQuestions(matchId));
  }, []);

  const matchQuestionsList = useSelector(state => state?.liveQuestion);

  useEffect(() => {
    if (matchQuestionsList) {
      setQuestionList(matchQuestionsList?.data);
    }
  }, [matchQuestionsList]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Question List ({questionList?.length}) </Text>
      <FlatList
        removeClippedSubviews={false}
        data={questionList}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>There is no live Question</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <MatchCard match={item} />}
      />
    </View>
  );
};

export default QuestionScreen;
