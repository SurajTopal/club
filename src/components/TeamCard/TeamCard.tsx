import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppColors} from '../../theme';

import {styles} from './teamCard-styles';

const TeamCard = ({teamName, players, onEdit}) => {
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
        data={players}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({item}) => <PlayerCard player={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

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
        {player.name}
      </Text>
      <Text style={styles.playerStat}>
        {player.stat}
        <Text style={styles.prediction}>- {player.prediction}</Text>
      </Text>

      <Text style={styles.points}>{player.points} pts</Text>
    </View>
  );
};

export default TeamCard;
