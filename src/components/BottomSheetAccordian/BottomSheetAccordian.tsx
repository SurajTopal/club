import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import {BottomSheet, Divider, Icon} from 'react-native-elements';
import {HOW_TO_PLAY} from '../../constant/contants';
import {AppColors} from '../../theme';

import {styles} from './bottomSheetAccordian-styles';

export default function BottomSheetAccordian(props) {
  const {title} = props;

  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.mainContainer} key={Math.random()}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setIsVisible(true)}>
        <View style={styles.subContainer}>
          <Image
            source={require('../../assets/images/selectMatch.png')}
            style={{height: 70, width: 140, marginRight: 10, borderRadius: 15}}
          />
          <Text style={styles.cardTitle}>{HOW_TO_PLAY[title].title}</Text>
        </View>
        <Icon name="chevron-right" type="entypo" color={AppColors.bgColor} />
      </TouchableOpacity>
      <BottomSheet
        isVisible={isVisible}
        containerStyle={styles.bottomSheetContainer}>
        <View style={styles.sheetContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>{HOW_TO_PLAY[title].title}</Text>
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <Icon name="close" type="antdesign" color={AppColors.bgColor} />
            </TouchableOpacity>
          </View>
          {title !== 'createYourTeam' && title !== 'scoringPoints' ? (
            <FlatList
              data={HOW_TO_PLAY[title]?.points}
              keyExtractor={(item, index) => 'Point' + index.toString()}
              renderItem={({item}) => (
                <View style={styles.titleContainer}>
                  <Icon
                    name="dot-single"
                    type="entypo"
                    color={AppColors.palette.osloGrey}
                  />
                  <Text style={styles.text}>{item}</Text>
                </View>
              )}
            />
          ) : (
            <>
              <ScrollView style={{flex: 1}}>
                {HOW_TO_PLAY[title]?.rules?.map((item, index) => (
                  <View key={index} style={{marginBottom: 16}}>
                    <Text
                      variant="titleMedium"
                      style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        marginBottom: 8,
                      }}>
                      {item.title}
                    </Text>
                    {item.points.map((point, i) => (
                      <Text
                        key={i}
                        style={{color: '#ccc', marginLeft: 8, marginBottom: 4}}>
                        • {point}
                      </Text>
                    ))}
                    <Divider
                      style={{backgroundColor: '#444', marginVertical: 8}}
                    />
                  </View>
                ))}
              </ScrollView>
            </>
          )}
        </View>
      </BottomSheet>
    </View>
  );
}
