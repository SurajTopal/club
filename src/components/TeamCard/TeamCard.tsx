import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {CheckBox} from 'react-native-elements';
import {AppColors} from '../../theme';

import {styles} from './teamCard-styles';
import {CheckBox} from 'react-native-elements';

interface ITeamCard {
  teamName: string;
  playerDetails: any;
  onEdit: () => void;
  isTeamSelection?: boolean;
  selectedTeamIds: Array<string>;
  setSelectedTeamIds: (selectedTeamIds: Array<string>) => void;
}

const TeamCard = (props: ITeamCard) => {
  const {
    teamName,
    playerDetails,
    onEdit,
    setSelectedTeamIds,
    selectedTeamIds,
    isTeamSelection = false,
  } = props;

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (selectedTeamIds) {
      if (selectedTeamIds.find(teamId => teamId === playerDetails?.team_id)) {
        setIsSelected(true);
      } else {
        setIsSelected(false);
      }
    }
  }, [selectedTeamIds]);

  const PlayerCard = ({player}) => {
    return (
      <View style={styles.playerCard}>
        {player.role && <Text style={[styles.roleBadge]}>{player.role}</Text>}
        {/* Player Image with Role Badge */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/virat.png')}
            style={styles.image}
          />
        </View>
        {/* Player Details */}
        <Text numberOfLines={1} style={styles.playerName}>
          {player?.player_name}
        </Text>
        <Text style={styles.playerStat}>
          {player.questions[0]?.question_text}
          <Text style={styles.prediction}>
            - {player.questions[0]?.user_answer ? 'Yes' : 'No'}
          </Text>
        </Text>

        <Text style={styles.points}>{player.questions[0]?.points} pts</Text>
      </View>
    );
  };

  console.log('Team Details :', playerDetails);

  const handleCheck = () => {
    if (
      selectedTeamIds?.length &&
      selectedTeamIds?.find(teamId => teamId === playerDetails?.team_id)
    ) {
      const index = selectedTeamIds.indexOf(playerDetails?.team_id);
      const teamIds = selectedTeamIds;
      teamIds.splice(index, 1);
      setSelectedTeamIds([...teamIds]);
    } else {
      setSelectedTeamIds([...selectedTeamIds, playerDetails?.team_id]);
    }
  };

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.teamName}>{teamName}</Text>
        {isTeamSelection ? (
          <CheckBox
            onPress={handleCheck}
            checked={isSelected}
            uncheckedColor={AppColors.bgColor}
            checkedColor={AppColors.palette.lightLimeGreen}
          />
        ) : (
          <TouchableOpacity
            onPress={onEdit}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="account-edit"
              size={20}
              color={AppColors.palette.greenWhite}
            />
            <Text style={{color: AppColors.palette.greenWhite, marginLeft: 5}}>
              Edit
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Player List */}
      <FlatList
        data={playerDetails?.players}
        horizontal
        removeClippedSubviews={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => <PlayerCard player={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TeamCard;
