import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {styles} from './captainCard-styles';

const CaptainCard = ({player, index}) => {
 
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
      <Text style={styles.answer}>Yes</Text>
      <Text style={styles.points}>{player.points} pts</Text>

      {/* Buttons */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.vcButton]}>
        <Text style={styles.vcText}>VC</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CaptainCard;
