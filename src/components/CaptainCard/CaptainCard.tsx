import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme';

import {styles} from './captainCard-styles';

const CaptainCard = props => {
  const {captainViceCaptain, setCaptainViceCaptain, player, index} = props;

  const setCaptain = () => {
    if (player.name !== captainViceCaptain?.viceCaptain?.name) {
      setCaptainViceCaptain({...captainViceCaptain, captain: player});
    }
  };

  const setViceCaptain = () => {
    if (captainViceCaptain?.captain?.name !== player.name)
      setCaptainViceCaptain({...captainViceCaptain, viceCaptain: player});
  };

  const calculatePlayerPoints = () => {
    let points = player.point;

    if (captainViceCaptain?.captain?.name === player.name) {
      return (
        <Text style={styles.points}>
          <Text style={styles.text}>{points} pts</Text>
          {' > '}
          {points * 2} pts
        </Text>
      );
    } else if (captainViceCaptain?.viceCaptain?.name === player.name) {
      return (
        <Text style={styles.points}>
          <Text style={styles.text}>{points}</Text>
          {' > '}
          {points * 1.5} pts
        </Text>
      );
    }

    return <Text style={styles.points}>{points} pts</Text>;
  };

  return (
    <View style={[styles.card, index % 2 !== 0 && {marginLeft: 20}]}>
      {/* Player Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/virat.png')}
          style={styles.playerImage}
        />
      </View>
      {/* Player Info */}
      <Text style={styles.playerName}>{player.name}</Text>
      <Text style={styles.question}>{player.question}</Text>
      <Text style={styles.answer}>{player.option}</Text>
      {calculatePlayerPoints()}
      {/* Buttons */}
      <TouchableOpacity
        style={[
          styles.button,
          captainViceCaptain?.captain?.name === player?.name && {
            borderColor: AppColors.palette.lightLimeGreen,
          },
        ]}
        onPress={() => setCaptain()}>
        <Text style={styles.buttonText}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          captainViceCaptain?.viceCaptain?.name === player?.name && {
            borderColor: AppColors.palette.lightLimeGreen,
          },
        ]}
        onPress={() => setViceCaptain()}>
        <Text style={styles.vcText}>VC</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CaptainCard;
