import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import CaptainCard from '../../components/CaptainCard/CaptainCard';

import {styles} from './captainScreen-styles';

export default function CaptainScreen(props) {
  const {
    route: {
      params: {questionList},
    },
  } = props;

  console.log("Question List : : : : : : : : :",questionList);

  const [captainViceCaptain, setCaptainViceCaptain] = useState([]);

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
        removeClippedSubviews={false}
        // contentContainerStyle={{borderWidth: 1, borderColor: 'red'}}
        renderItem={({item, index}) => (
          <CaptainCard
            player={item}
            index={index}
            captainViceCaptain={captainViceCaptain}
            setCaptainViceCaptain={setCaptainViceCaptain}
          />
        )}
      />
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
