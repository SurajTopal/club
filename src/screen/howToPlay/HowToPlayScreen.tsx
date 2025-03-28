import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import BottomSheetAccordian from '../../components/BottomSheetAccordian/BottomSheetAccordian';
import {ScrollView} from 'react-native';
import {AppColors} from '../../theme';

import {styles} from './howToPlayScreen-styles';

export default function HowToPlayScreen() {
  const [activeTab, setActiveTab] = useState('Select');

  const tabOption = ['Select', 'Score', 'Win'];
  const tabTitle = {
    Select:
      'Select answers for ANY 4 players based on past performance and stats to join contests.',
    Score: 'Get points for every correct answer and climb the leaderboard.',
    Win: 'Top the leaderboards based on your answers and WIN BIG.',
  };

  const renderTitle = (title1, title2) => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title1}</Text>
        <Text style={styles.greenTitle}>{title2}</Text>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Image
        source={require('../../assets/images/howToPlay.png')}
        style={styles.bannerContainer}
      /> */}
      <View style={styles.tabContainer}>
        {tabOption.map(option => (
          <TouchableOpacity
            onPress={() => setActiveTab(option)}
            style={[styles.tab]}>
            <Text
              style={[
                styles.tabText,
                activeTab === option && {
                  color: AppColors.palette.lightLimeGreen,
                },
              ]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Text style={styles.title}>{activeTab}</Text>
        <Text style={styles.selectedTabText}>{tabTitle[activeTab]}</Text>
      </View>
      {renderTitle('Getting Started with', ' HighRoller Club')}
      <BottomSheetAccordian title="createYourTeam" />
      <BottomSheetAccordian title="scoringPoints" />
      {renderTitle('Want more', ' details?')}
      <BottomSheetAccordian title="selectMatch" />
      <BottomSheetAccordian title="checkYourProgress" />
      <BottomSheetAccordian title="getYourWinnings" />
      {renderTitle('FA', 'Q')}
    </ScrollView>
  );
}
