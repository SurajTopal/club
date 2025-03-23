import React from 'react';
import {Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {formatEventDate} from '../../utility';

import {styles} from './upcomingMatchesCard-styles';

interface IMatchCard {
  match: any;
  isMyMatch?: boolean;
}

const MatchCard = (props: IMatchCard) => {
  const {match, isMyMatch} = props;

  const navigation = useNavigation();

  const handleCardPress = () => {
    if (isMyMatch) navigation.navigate('My Contest', {matchId: match?.match_id});
    else navigation.navigate('Contest', {matchId: match.id});
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handleCardPress}>
      <View style={styles.topRow}>
        <Text style={styles.timer}>
          {formatEventDate(match?.start_time, match?.end_time)}
        </Text>

        {isMyMatch && (
          <View style={styles.teamContestContainer}>
            <Text style={styles.endTime}>{match?.team_count} Team </Text>
            <Icon
              name="dot-single"
              type="entypo"
              color="#ccc"
              size={16}
              style={styles.icon}
            />
            <Text style={styles.endTime}>{match?.contest_count} Contest</Text>
          </View>
        )}
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.matchTime}>{match?.match_format}</Text>
        <Icon
          name="dot-single"
          type="entypo"
          color="#ccc"
          size={16}
          style={styles.icon}
        />
        <Text style={styles.leagueText}>
          {match.tournament_name || match.title}
        </Text>
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

        {match?.amount >= 1 && (
          <View style={styles.prizeContainer}>
            <Text style={styles.megaText}>You Won</Text>
            <Text style={styles.prizeText}>₹{match?.amount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MatchCard;
