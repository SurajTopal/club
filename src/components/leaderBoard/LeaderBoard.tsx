import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './leaderBoard-styles';
import { AppColors } from '../../theme';

const TEAM = [
  {
    username: 'BANKI752XY',
    team: 'T1',
    won: '₹500',
    points: 360.5,
    rank: '#1',
  },
  {
    username: 'Jai Shri Ram 123 81',
    team: 'T1',
    won: '₹300',
    points: 304.5,
    rank: '#2',
  },
  {
    username: 'Jitendra Parashr',
    team: 'T1',
    won: '₹300',
    points: 298.5,
    rank: '#3',
  },
  {
    username: 'KHATARNAK KING 1242',
    team: 'T1',
    won: '₹100',
    points: 298,
    rank: '#4',
  },
  {
    username: 'Classon First Team XI',
    team: 'T1',
    won: '₹100',
    points: 293.5,
    rank: '#5',
  },
  {
    username: 'Seerat Jan 12',
    team: 'T1',
    won: '₹50',
    points: 282.5,
    rank: '#6',
  },
  {
    username: 'Rohit Warriors',
    team: 'T2',
    won: '₹50',
    points: 275.0,
    rank: '#7',
  },
  {
    username: 'Master Blaster 99',
    team: 'T3',
    won: '₹50',
    points: 270.2,
    rank: '#8',
  },
  {
    username: 'Cricket Stars XI',
    team: 'T2',
    won: '₹50',
    points: 268.0,
    rank: '#9',
  },
  {
    username: 'Thunder Strikers',
    team: 'T3',
    won: '₹50',
    points: 265.5,
    rank: '#10',
  },
  {
    username: 'Super Giants 007',
    team: 'T1',
    won: '₹50',
    points: 260.0,
    rank: '#11',
  },
  {
    username: 'Legend Hitters',
    team: 'T3',
    won: '₹50',
    points: 258.5,
    rank: '#12',
  },
  {
    username: 'Maverick XI',
    team: 'T2',
    won: '₹50',
    points: 255.0,
    rank: '#13',
  },
  {
    username: 'Ultimate Challengers',
    team: 'T3',
    won: '₹50',
    points: 250.0,
    rank: '#14',
  },
  {
    username: 'The Dominators',
    team: 'T1',
    won: '₹50',
    points: 245.5,
    rank: '#15',
  },
  {
    username: 'Warriors United',
    team: 'T2',
    won: '₹50',
    points: 240.0,
    rank: '#16',
  },
  {
    username: 'Rising Titans',
    team: 'T3',
    won: '₹50',
    points: 238.0,
    rank: '#17',
  },
];

export default function LeaderBoard() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={[styles.title, styles.allTeam]}>All Teams</Text>
        <Text style={styles.title}>Points</Text>
        <Text style={styles.title}>Rank</Text>
      </View>

      <FlatList
        data={TEAM}
        keyExtractor={(item, index) => 'points' + index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.cardContainer}>
            <View style={styles.leftCardContainer}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.text} numberOfLines={1}>
                  {item?.username}
                </Text>
                <View
                  style={styles.teamContainer}>
                  <Text style={styles.text}>{item.team}</Text>
                </View>
              </View>
              <Text style={styles.text}>WON {item.won}</Text>
            </View>
            <Text style={styles.text}>{item.points}</Text>
            <Text style={styles.text}>{item.rank} --</Text>
          </View>
        )}
      />
    </View>
  );
}
