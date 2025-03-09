import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {styles} from './playerBottomSheet-styles';
import {Icon} from 'react-native-elements';
import {AppColors} from '../../theme';

export default function PlayerBottomSheet() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.yourTeamText}>Your Team</Text>
      <View style={styles.footerSubContainer}>
        <FlatList
          data={[1, 3, 3, 4]}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          contentContainerStyle={styles.cardContainer}
          renderItem={({item, index}) => (
            <View
              style={[styles.footerCard, index % 2 !== 0 && {marginLeft: 10}]}>
              <View style={styles.footerSubCard}>
                <Image
                  source={require('../../assets/images/virat.png')}
                  style={styles.image}
                />
                <Text style={styles.footerText}>
                  14 runs or more ?: <Text style={styles.yesText}>Yes</Text>
                </Text>
              </View>
              <TouchableOpacity
                style={styles.removeButton}>
                <Icon
                  type="antdesign"
                  name="closecircleo"
                  color={AppColors.palette.lightCoral}
                  size={15}
                />
              </TouchableOpacity>
            </View>
          )}
        />
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
