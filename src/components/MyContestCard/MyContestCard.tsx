import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import {Divider} from 'react-native-elements';
import TeamCard from '../TeamCard/TeamCard';
import {AppColors} from '../../theme';
import {useSelector} from 'react-redux';

import {styles} from './myContestCard-styles';

const MyContestCard = props => {
  const {contestInfo} = props;
  const {
    id,
    match_id,
    title,
    entry_fee,
    current_entry_fee,
    current_pool_size,
    max_pool_size,
    first_price,
    total_spots,
    min_spots,
    filled_spots,
    is_spawnable,
    start_time,
    end_time,
    created_at,
    brand_id,
    total_allowed_team,
    total_winners,
    category_id,
    team_indexes,
    category_name,
    is_active,
    has_ended,
    contest_id,
  } = contestInfo;

  const totalSpots = total_spots;
  const remainingSpots = totalSpots - filled_spots;
  const progress = (totalSpots - remainingSpots) / totalSpots;
  const winnerPercentage = (total_winners / total_spots) * 100;
  const [isOpen, setIsOpen] = useState(false);
  const [contestTeam, setContestTeam] = useState([]);

  const teamReducer = useSelector(state => state.teams);
  const navigation = useNavigation();


  useEffect(() => {
    if (teamReducer?.data) {
      const result = teamReducer?.data
        .filter(item =>
          team_indexes?.some(teamIndex => teamIndex === item.teamindex),
        ) // Filter objects where index is in a
        .map(item => item);

      setContestTeam(result || []);
    }
  }, [teamReducer]);

  const handleContest = () => {
    navigation.navigate('WinningLeaderboard', {contestId: contest_id});
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.subCard} onPress={handleContest}>
        {/* Pool Type and Discount */}
        <View style={styles.headerRow}>
          <View style={styles.flexRow}>
            <Icon
              name="line-chart"
              size={14}
              color={AppColors.palette.lightLimeGreen}
            />
            <Text style={styles.flexiblePool}>{category_name}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                paddingVertical: 5,
                paddingHorizontal: 15,
                borderWidth: 1,
                borderColor: AppColors.palette.osloGrey,
                borderRadius: 5,
                marginLeft: 5,
              }}>
              <Text style={styles.discount}>
                ₹{current_entry_fee || entry_fee}
              </Text>
            </View>
          </View>
        </View>

        {/* Pool Amount */}
        <Text style={styles.poolAmount}>₹{max_pool_size}</Text>

        {/* Prize Details */}
        <View style={styles.prizeRow}>
          <View
            style={[
              styles.prizeItem,
              {borderRightWidth: 1, borderColor: AppColors.palette.osloGrey},
            ]}>
            <Text style={styles.subText}>1st Prize</Text>
            <Text style={styles.valueText}>₹{first_price}</Text>
          </View>
          <View
            style={[
              styles.prizeItem,
              {borderRightWidth: 1, borderColor: AppColors.palette.osloGrey},
            ]}>
            <Text style={styles.subText}>Winners</Text>
            <Text style={styles.valueText}>
              <Icon name="trophy" size={14} color="white" /> {winnerPercentage}%
            </Text>
          </View>
          <View style={styles.prizeItem}>
            <Text style={styles.subText}>Teams</Text>
            <Text style={styles.valueText}>
              <Icon name="users" size={14} color="white" /> up to{' '}
              {total_allowed_team}
            </Text>
          </View>
        </View>

        {/* Progress Bar */}
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={1}
          value={progress}
          minimumTrackTintColor="#FFA500"
          maximumTrackTintColor="#808080"
          thumbTintColor="transparent"
          // disabled={true}
        />
        {/* Spots Left */}
        <View style={styles.spotRow}>
          <Text style={styles.leftText}>{total_spots - filled_spots} Left</Text>
          <Text style={styles.totalSpots}>Spots: {total_spots}</Text>
        </View>

        <Divider
          color={AppColors.palette.osloGrey}
          style={{marginVertical: 10}}
        />
        <TouchableOpacity
          style={styles.joinedTeamContainer}
          onPress={() => setIsOpen(!isOpen)}>
          <Text style={styles.joinedText}>
            Joined with {team_indexes?.length} Teams
          </Text>
          <Icon
            name={isOpen ? 'chevron-up' : 'chevron-down'}
            color={AppColors.bgColor}
            size={20}
          />
        </TouchableOpacity>
        <ScrollView horizontal>
          {team_indexes?.map(team => (
            <View style={styles.teamContainer} key={team + 'Team'}>
              <Text style={styles.team}>{team}</Text>
            </View>
          ))}
        </ScrollView>
      </TouchableOpacity>
      {isOpen && (
        <ScrollView>
          {contestTeam?.map((item, index) => (
            <TeamCard
              teamName={`Team Name ${index + 1}`}
              playerDetails={item}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default MyContestCard;
