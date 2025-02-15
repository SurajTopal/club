import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {styles} from './questionScreen-styles';

const MATCH_CARDS = [
  {
    id: '1',
    team1: 'NZL',
    team2: 'RLE',
    question:
      'Will New Zealand score 65 or more runs within the first 15 overs of their innings in this high-pressure match?',
    trades: '10.55L Trades',
    yesPrice: '₹2',
    noPrice: '₹8',
  },
  {
    id: '2',
    team1: 'AUS',
    team2: 'IND',
    question:
      'Australia’s top order has been in great form. Will they manage to score 200+ runs in their first innings, considering the current pitch conditions?',
    trades: '8.75L Trades',
    yesPrice: '₹5',
    noPrice: '₹10',
  },
  {
    id: '3',
    team1: 'ENG',
    team2: 'PAK',
    question:
      'With the pitch favoring fast bowlers, will England be able to take 3 or more wickets during the powerplay overs against Pakistan’s strong opening pair?',
    trades: '6.2L Trades',
    yesPrice: '₹3',
    noPrice: '₹7',
  },
  {
    id: '4',
    team1: 'SA',
    team2: 'BAN',
    question:
      'Considering Bangladesh’s recent struggles against pace bowling, will South Africa’s fast bowlers be able to restrict them under 150 runs in their 20-over innings?',
    trades: '5.9L Trades',
    yesPrice: '₹6',
    noPrice: '₹12',
  },
  {
    id: '5',
    team1: 'WI',
    team2: 'SL',
    question:
      'The West Indies have some of the biggest hitters in world cricket. Will they smash more than 10 sixes in this match against Sri Lanka’s spin-heavy attack?',
    trades: '7.3L Trades',
    yesPrice: '₹4',
    noPrice: '₹9',
  },
  {
    id: '6',
    team1: 'AFG',
    team2: 'IRE',
    question:
      'Will Afghanistan’s spinners take 5 or more wickets in this match against an Ireland batting lineup that has struggled against spin in recent encounters?',
    trades: '4.8L Trades',
    yesPrice: '₹7',
    noPrice: '₹13',
  },
  {
    id: '7',
    team1: 'IND',
    team2: 'PAK',
    question:
      'This high-voltage encounter has always been unpredictable. Will India chase down a target of 180+ within 18 overs in this crucial match against Pakistan?',
    trades: '15.2L Trades',
    yesPrice: '₹2.5',
    noPrice: '₹6.5',
  },
  {
    id: '8',
    team1: 'ENG',
    team2: 'NZL',
    question:
      'New Zealand’s bowling attack has been exceptional in the middle overs. Will England’s middle order still manage to score 100+ runs between overs 10 to 20?',
    trades: '6.5L Trades',
    yesPrice: '₹5.5',
    noPrice: '₹11',
  },
  {
    id: '9',
    team1: 'AUS',
    team2: 'SA',
    question:
      'With both teams boasting world-class fast bowlers, will we see more than 12 wickets falling in this match between Australia and South Africa?',
    trades: '9.1L Trades',
    yesPrice: '₹3.8',
    noPrice: '₹8.2',
  },
  {
    id: '10',
    team1: 'BAN',
    team2: 'IRE',
    question:
      'Considering the conditions and team strengths, will Bangladesh hit 5 or more boundaries within the first 5 overs of their innings against Ireland?',
    trades: '3.2L Trades',
    yesPrice: '₹6',
    noPrice: '₹14',
  },
];

const MatchCard = ({match}) => (
  <TouchableOpacity style={styles.cardContainer}>
    <View style={styles.headerContainer}>
      <View style={styles.subHeaderContainer}>
        <View style={styles.matchContainer}>
          <Image
            source={require('../../assets/icons/profile.png')}
            style={styles.teamIcon}
          />
          <Text style={styles.matchText}>{match.team1}</Text>
        </View>
        <Text style={styles.vsText}>VS</Text>
        <View style={styles.matchContainer}>
          <Text style={styles.matchText}>{match.team2}</Text>
          <Image
            source={require('../../assets/icons/profile.png')}
            style={styles.teamIcon}
          />
        </View>
      </View>
      {/* <Text style={styles.cardText}>/</Text>
      <View>
        <Text style={styles.cardText}>{match.trades}</Text>
      </View> */}
    </View>
    <Text style={styles.questionText}>{match.question}</Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.greenButton}>
        <Text style={styles.greenButtonTitle}>Yes {match.yesPrice}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.redButton}>
        <Text style={styles.redButtonTitle}>No {match.noPrice}</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const QuestionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Live Matches List ({MATCH_CARDS.length}){' '}
      </Text>
      <FlatList
        removeClippedSubviews={false}
        data={MATCH_CARDS}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => <MatchCard match={item} />}
      />
    </View>
  );
};

export default QuestionScreen;
