import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {AppColors} from '../../theme';

import {styles} from './playerQuestionCard-styles';

const PlayerQuestionCard = ({player}) => {
  function renderQuestion(playerName: string, question: string) {
    const nameParts = playerName.trim()?.split(' ');
    let formattedName =
      nameParts.length > 1
        ? `${nameParts[0][0]} ${nameParts?.slice(1).join(' ')}`
        : nameParts[0][0];

    const ques = question?.substring(5)?.split(' '); // Split question into words
    console.log('QUestion.....', ques);

    return (
      <View>
        <Text style={styles.betText}>Will {formattedName}</Text>
        {/* <Text style={styles.betRunText}>{rest.join(' ')}</Text> */}
      </View>
    );
  }

  return (
    <View style={styles.cardContainer}>
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
        <View key={index} style={styles.betContainer}>
          {renderQuestion(player?.player_name, info?.question_text)}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.yesButton}>
              <Text style={styles.optionText}>Yes</Text>
              <Text style={styles.pointsText}>{info.yes_points} pts</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.noButton, {borderColor: '#C3FD61'}]}>
              <Text style={styles.optionText}>No</Text>
              <Text style={styles.pointsText}>{info.no_points} pts</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default PlayerQuestionCard;
