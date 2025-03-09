import React from 'react';
import moment from 'moment';
import {Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './upcomingMatchesCard-styles';

const MatchCard = ({match}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate('Contest', {matchId: match.id})}>
      <View style={styles.topRow}>
        <Text style={styles.timer}>
          {moment(match?.start_time).format('hh:mm A')}
        </Text>

        <Text style={styles.endTime}>
          - {moment(match?.end_time).format('hh:mm A')}
        </Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.matchTime}>{match?.format}</Text>
        <Icon
          name="dot-single"
          type="entypo"
          color="#ccc"
          size={16}
          style={styles.icon}
        />
        <Text style={styles.leagueText}> {match.tournament_name}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.teamContainer}>
          <View style={styles.teamRow}>
            {/* <Image source={{uri: match.team1.logo}} style={styles.teamLogo} /> */}
            <Image
              source={require('../../assets/icons/profile.png')}
              style={styles.teamLogo}
            />
            <Text style={styles.teamShortName}>{match.team1_sname}</Text>
            <Text style={styles.teamName}>{`(${match.team1_name})`}</Text>
          </View>
          <View style={styles.teamRow}>
            {/* <Image source={{uri: match.team2.logo}} style={styles.teamLogo} /> */}
            <Image
              source={require('../../assets/icons/profile.png')}
              style={styles.teamLogo}
            />
            <Text style={styles.teamShortName}>{match.team2_sname}</Text>
            <Text style={styles.teamName}>{`(${match.team2_name})`}</Text>
          </View>
        </View>

        <View style={styles.prizeContainer}>
          <Text style={styles.megaText}>MEGA</Text>
          <Text style={styles.prizeText}>₹2 LAKHS</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MatchCard;
