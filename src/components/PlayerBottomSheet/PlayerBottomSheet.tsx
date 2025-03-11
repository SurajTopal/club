import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {AppColors} from '../../theme';

import {styles} from './playerBottomSheet-styles';

export default function PlayerBottomSheet(props) {
  const {questionList, setQuestionList, handleNextButton} = props;
  const [dummy, setDummy] = useState([
    {dummy: true},
    {dummy: true},
    {dummy: true},
    {dummy: true},
  ]);

  useEffect(() => {
    if (questionList.length) {
      setDummy([...new Array(4 - questionList.length).fill({dummy: true})]);
    } else {
      setDummy([...new Array(4).fill({dummy: true})]);
    }
  }, [questionList]);

  const removePlayer = index => {
    const quesList = questionList;
    quesList.splice(index, 1);
    setQuestionList([...quesList]);
  };

  return (
    <View style={styles.footerContainer}>
      <Text style={styles.yourTeamText}>Your Team</Text>
      <View style={styles.footerSubContainer}>
        <FlatList
          data={[...questionList, ...dummy]}
          numColumns={2}
          removeClippedSubviews={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          contentContainerStyle={styles.cardContainer}
          renderItem={({item, index}) => {
            return item?.dummy ? (
              <View
                style={[styles.dummyCard, index % 2 !== 0 && {marginLeft: 10}]}>
                <Icon
                  name="add-user"
                  type="entypo"
                  size={15}
                  color={AppColors.palette.osloGrey}
                />
                <Text style={styles.number}>{index + 1}</Text>
              </View>
            ) : (
              <View
                style={[
                  styles.footerCard,
                  index % 2 !== 0 && {marginLeft: 10},
                ]}>
                <View style={styles.footerSubCard}>
                  <Image
                    source={require('../../assets/images/virat.png')}
                    style={styles.image}
                  />
                  <Text style={styles.footerText}>
                    {item?.question}{' '}
                    <Text style={styles.yesText}>{item?.option}</Text>
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removePlayer(index)}>
                  <Icon
                    type="antdesign"
                    name="closecircleo"
                    color={AppColors.palette.lightCoral}
                    size={15}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <TouchableOpacity
          style={[
            styles.nextButton,
            questionList.length !== 4 && {
              backgroundColor: AppColors.palette.osloGrey,
            },
          ]}
          onPress={() => handleNextButton()}
          disabled={questionList.length !== 4}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
