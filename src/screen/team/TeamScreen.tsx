import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import TeamCard from '../../components/TeamCard/TeamCard';
import {AppColors} from '../../theme';
import Button from '../../components/Button/Button';
import {joinContest} from '../../features/joinContest/joinContestSlice';
import ContestBottomSheet from '../../features/joinBottomSheet/JoinBottomSheet';
import {useNavigation} from '@react-navigation/native';

export default function TeamScreen(props) {
  const {
    route: {
      params: {contestId,},
    },
  } = props;

  const [teamList, setTeamList] = useState([]);
  const [selectedTeamIds, setSelectedTeamIds] = useState([]);
  const teamReducer = useSelector(state => state.teams);
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    if (teamReducer?.data) {
      setTeamList(teamReducer?.data || []);
    }
  }, [teamReducer]);

  const handleJoinButton = () => {

console.log("COnested Team ID : ",contestId);

    if (contestId) {
      const formatData = {
        contest_id: contestId,
        user_team_ids: [selectedTeamIds],
      };

      dispatch(joinContest({formatData, navigation}));
    }
  };

  const handleContest = () => {
    setIsVisible(true);
  };

  return (
    <View
      style={{flex: 1, backgroundColor: AppColors.palette.black, padding: 10}}>
      <FlatList
        data={teamList || []}
        removeClippedSubviews={false}
        renderItem={({item, index}) => {
          return (
            <TeamCard
              teamName={'Team Name' + (index + 1)}
              playerDetails={item}
              isTeamSelection
              selectedTeamIds={selectedTeamIds}
              setSelectedTeamIds={setSelectedTeamIds}
              onEdit={() => {}}
            />
          );
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
          Selected Team : {selectedTeamIds.length}
        </Text>
        {selectedTeamIds?.length && (
          <Button handleButtonPress={handleContest} title="Join Contest" />
        )}
      </View>
      <ContestBottomSheet
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        handleJoinButton={handleJoinButton}
      />
    </View>
  );
}
