import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppColors} from '../../theme';

import {styles} from './teamCard-styles';

const TeamCard = props => {
  const {teamName, playerDetails, onEdit} = props;
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

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.teamName}>{teamName}</Text>
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
