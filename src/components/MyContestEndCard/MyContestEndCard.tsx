import React from 'react';
import {AppColors} from '../../theme';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import {styles} from './myContestEndCard-styles';

const MyContestEndCard = ({contest}) => {

  const navigation = useNavigation();

  const winnerPercentage =
    (contest?.total_winners / contest?.total_spots) * 100;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('WinningLeaderboard', {
          contestId: contest?.contest_id,
        })
      }>
      <View style={styles.subCard}>
        <View style={styles.rowContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="line-chart"
              size={14}
              color={AppColors.palette.osloGrey}
            />
            <Text style={styles.title}>{contest?.category_name}</Text>
          </View>
          <Text style={styles.title}>Entry Fee</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.prizePool}>₹{contest?.max_pool_size}</Text>
          <Text style={styles.prizePool}>₹{contest?.entry_fee}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 1,
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingVertical: 10,
          backgroundColor: AppColors.palette.blackEel,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.text}>₹{contest?.first_price}</Text>
          <Text style={styles.text}>
            <Icon name="trophy" color={AppColors.palette.osloGrey} size={15} />
            {winnerPercentage}%
          </Text>
          <Text style={styles.text}>
            <Icon name="users" size={15} color={AppColors.palette.osloGrey} />
            {contest?.total_allowed_team}
          </Text>
        </View>
        <Text style={[styles.text, styles.spot]}>
          {contest?.total_spots - contest?.filled_spots} Spots
        </Text>
      </View>

      {contest?.teams_data?.map((team, index) => (
        <View
          key={team.id}
          style={[
            styles.teamContainer,
            contest.teams_data.length - 1 === index && {borderBottomWidth: 0},
          ]}>
          <View style={styles.teamCardContainer}>
            <Text style={styles.teamName}>
              {contest.user_name} ({team.team_index})
            </Text>
            {team.team_amount > 0 && (
              <Text style={styles.winnings}>
                🎉 You won ₹{team.team_amount}
              </Text>
            )}
          </View>
          <Text style={styles.score}> {team.team_points}</Text>
          <Text style={styles.rank}> #{team.team_rank}</Text>
        </View>
      ))}
    </TouchableOpacity>
  );
};

export default MyContestEndCard;
