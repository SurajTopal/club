import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import CaptainCard from '../../components/CaptainCard/CaptainCard';
import {createTeam} from '../../features/createTeam/createTeamSlice';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../auth-context';
import {useDispatch} from 'react-redux';
import {AppColors} from '../../theme';

import {styles} from './captainScreen-styles';

export default function CaptainScreen(props) {
  const {
    route: {
      params: {questionList, matchId, contestId, isTeamCreation = false},
    },
  } = props;

  const [captainViceCaptain, setCaptainViceCaptain] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [teamID, setTeamID] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const {contestData} = useAuth();
  const {signOut} = useAuth();

  useEffect(() => {
    if (
      captainViceCaptain?.captain?.name &&
      captainViceCaptain?.viceCaptain?.name
    ) {
      setIsSelected(true);
    }
  }, [captainViceCaptain]);

  const handleSaveButton = () => {
    const userReponse = questionList.map(playerQuestion => {
      return {
        player_id: playerQuestion.playerId,
        question_id: playerQuestion.questionId,
        user_answer: playerQuestion?.option == 'Yes' ? true : false,
      };
    });

    if (isSelected) {
      const formatData = {
        match_id: matchId,
        captain_id: captainViceCaptain?.captain?.playerId,
        vice_captain_id: captainViceCaptain?.viceCaptain?.playerId,
        user_responses: [...userReponse],
      };

      if (contestId)
        dispatch(
          createTeam({formatData, navigation, isNavigation: false, signOut}),
        ).then(response => {
          const teamId = response?.payload?.data?.user_team_id;
          if (teamId) {
            navigation.navigate('Join', {
              ...contestData,
              teamId,
              contestId,
              isJoin: true,
            });
          }
        });
      else
        dispatch(
          createTeam({formatData, navigation, isNavigation: true, signOut}),
        );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.captainContainer}>
        <View style={styles.captainSubContainer}>
          <Text style={styles.title}>C</Text>
          <View>
            <Text style={styles.captainTitle}>Captain gets</Text>
            <Text style={styles.captainSubTitle}>2x {`(double) Point`}</Text>
          </View>
        </View>
        <View style={styles.captainSubContainer}>
          <Text style={styles.title}>VC</Text>
          <View>
            <Text style={styles.captainTitle}>Vice Captain gets</Text>
            <Text style={styles.captainSubTitle}>1.5x Point</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={questionList}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={false}
        renderItem={({item, index}) => (
          <CaptainCard
            player={item}
            index={index}
            captainViceCaptain={captainViceCaptain}
            setCaptainViceCaptain={setCaptainViceCaptain}
          />
        )}
      />
      <TouchableOpacity
        disabled={!isSelected}
        style={[
          styles.saveButton,
          !isSelected && {backgroundColor: AppColors.palette.blackEel},
        ]}
        onPress={() => handleSaveButton()}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
