import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {styles} from './myMatchesCard-styles';

const MyMatchCard = props => {
  const {team1, team2, team1Logo, team2Logo, date, time} = props;

  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.subCard}>
        <View style={styles.teamRow}>
          <View style={[styles.team, {marginBottom: 5}]}>
            <Image
              source={require('../../assets/icons/profile.png')}
              style={styles.logo}
            />
            <Text style={styles.teamName}>{team1}</Text>
          </View>
          <View style={styles.team}>
            <Image
              source={require('../../assets/icons/profile.png')}
              style={styles.logo}
            />
            <Text style={styles.teamName}>{team2}</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <Text style={[styles.dateTime, {marginBottom: 5}]}>{date}</Text>
          <Text style={styles.dateTime}>{time}</Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>1 Team</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyMatchCard;
