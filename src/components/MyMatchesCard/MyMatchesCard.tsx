import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './myMatchesCard-styles';

import {getMatchStatus} from '../../utility';

const MyMatchCard = props => {
  const {team1_sname, team2_sname, start_time, end_time} = props;


  const {matchStatus, time} = getMatchStatus(start_time, end_time);

  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.subCard}>
        <View style={styles.teamRow}>
          <View style={[styles.team, {marginBottom: 5}]}>
            <Image
              source={require('../../assets/icons/profile.png')}
              style={styles.logo}
            />
            <Text style={styles.teamName}>{team1_sname}</Text>
          </View>
          <View style={styles.team}>
            <Image
              source={require('../../assets/icons/profile.png')}
              style={styles.logo}
            />
            <Text style={styles.teamName}>{team2_sname}</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <Text style={[styles.dateTime, {marginBottom: 5}]}>
            {matchStatus}
          </Text>
          <Text style={styles.dateTime}>{time}</Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          {matchStatus === 'Live'
            ? 'Live'
            : matchStatus === 'Completed'
            ? 'Well Played'
            : matchStatus}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyMatchCard;
