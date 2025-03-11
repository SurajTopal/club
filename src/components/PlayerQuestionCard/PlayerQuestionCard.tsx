import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {AppColors} from '../../theme';

import {styles} from './playerQuestionCard-styles';

const PlayerQuestionCard = props => {
  const {player, questionList, setQuestionList} = props;

  function renderQuestion(playerName: string, question: string) {
    const nameParts = playerName.trim()?.split(' ');
    let formattedName =
      nameParts.length > 1
        ? `${nameParts[0][0]} ${nameParts?.slice(1).join(' ')}`
        : nameParts[0][0];

    const [firstPart, ...rest] = question?.split(' ');

    return (
      <View>
        <Text style={styles.betText}>
          Will {formattedName} {firstPart || ''}
        </Text>
        <Text style={styles.betRunText}>{rest?.join(' ')}</Text>
      </View>
    );
  }

  const handlePlayerSelection = (info, option) => {
    console.log('INFO HAIA', player);

    const questionInfo = {
      name: player.player_name,
      question: info.question_text,
      questionId: info.question_id,
      option: option,
      playerId: player?.player_id,
      point: option === 'Yes' ? info.yes_points : info.no_points,
    };

    const playerInfo = questionList?.find(
      quesInfo => quesInfo?.name === player.player_name,
    );

    const playerIndex = questionList?.findIndex(
      quesInfo => quesInfo?.name === player.player_name,
    );

    const questionIndex = questionList?.findIndex(
      quesInfo => quesInfo?.questionId === info?.question_id,
    );

    if (questionList?.length === 0) {
      setQuestionList([questionInfo]);
    } else if (
      player.player_name !== playerInfo?.name &&
      questionList.length < 4
    ) {
      setQuestionList([...questionList, questionInfo]);
    } else if (player.player_name === playerInfo?.name) {
      const quesList = questionList;
      if (
        questionInfo.questionId === playerInfo.questionId &&
        option === playerInfo.option
      ) {
        quesList.splice(playerIndex, 1);
        console.log();
      } else {
        quesList[playerIndex] = questionInfo;
      }
      setQuestionList([...quesList]);
    }
  };

  const activeButton = (questionId, option) => {
    const questionInfo = questionList.find(
      quesInfo => quesInfo.questionId === questionId,
    );
    return questionInfo?.option === option;
  };

  return (
    <View style={styles.cardContainer} key={player?.player_id}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assets/icons/profile.png')}
          style={styles.playerImage}
        />
        <View style={styles.playerDetails}>
          <Text style={styles.playerName}>{player.player_name}</Text>
          <View style={styles.formContainer}>
            <Text
              style={[(styles.formText, {color: AppColors.palette.osloGrey})]}>
              Form{' '}
            </Text>
            {['DNB', '5', '61*', 'DNB', '61*'].map((score, index) => (
              <View
                key={index.toString()}
                style={{
                  paddingVertical: 2,
                  paddingHorizontal: 8,
                  backgroundColor: 'black',
                  marginLeft: 4,
                  borderRadius: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text key={index} style={styles.formText}>
                  {score}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      {player.questions.map((info, index) => (
        <View key={'question' + index.toString()}>
          <View style={styles.betContainer}>
            {renderQuestion(player?.player_name, info?.question_text)}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.yesButton,
                  activeButton(info?.question_id, 'Yes') && {
                    borderColor: '#C3FD61',
                  },
                ]}
                onPress={() => handlePlayerSelection(info, 'Yes')}>
                <Text
                  style={[
                    styles.optionText,
                    activeButton(info?.question_id, 'Yes') && {
                      color: '#C3FD61',
                    },
                  ]}>
                  Yes
                </Text>
                <Text style={styles.pointsText}>{info.yes_points} pts</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handlePlayerSelection(info, 'No')}
                style={[
                  styles.noButton,
                  activeButton(info?.question_id, 'No') && {
                    borderColor: '#C3FD61',
                  },
                ]}>
                <Text
                  style={[
                    styles.optionText,
                    activeButton(info?.question_id, 'No') && {color: '#C3FD61'},
                  ]}>
                  No
                </Text>
                <Text style={styles.pointsText}>{info.no_points} pts</Text>
              </TouchableOpacity>
            </View>
          </View>
          {player.questions.length !== index + 1 && (
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.orText}>OR</Text>
              <View style={styles.divider} />
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default PlayerQuestionCard;
