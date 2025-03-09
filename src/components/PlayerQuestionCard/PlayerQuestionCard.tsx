import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {AppColors} from '../../theme';
import {styles} from './playerQuestionCard-styles';

const PlayerQuestionCard = ({player}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <Image source={player.image} style={styles.playerImage} />
        <View style={styles.playerDetails}>
          <Text style={styles.playerName}>{player.name}</Text>
          <View style={styles.formContainer}>
            <Text
              style={[(styles.formText, {color: AppColors.palette.osloGrey})]}>
              Form{' '}
            </Text>
            {player.form.map((score, index) => (
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
      {player.bets.map((bet, index) => (
        <View key={index} style={styles.betContainer}>
          <View>
            <Text style={styles.betText}>Will {player.name} score</Text>
            <Text style={styles.betRunText}>{bet.runs} runs or more?</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.yesButton}>
              <Text style={styles.optionText}>Yes</Text>
              <Text style={styles.pointsText}>{bet.yesPoints} pts</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.noButton, {borderColor: '#C3FD61'}]}>
              <Text style={styles.optionText}>No</Text>
              <Text style={styles.pointsText}>{bet.noPoints} pts</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default PlayerQuestionCard;
