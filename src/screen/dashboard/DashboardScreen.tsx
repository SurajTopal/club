import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

import {styles} from './dashboard-styles';

export default function DashBoardScreen() {
  return (
    <View style={styles.container}>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.title}>Live</Text>
        <View style={styles.totalMatchContainer}>
          <Text style={styles.title}>2</Text>
        </View>
      </View>
      {/* <FlatList
        data={[1, 1, 2, 2, 3]}
        renderItem={() => (
          <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardText}>ChhattisgarhT20</Text>
              <View
                style={{
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../assets/icons/profile.png')}
                  style={{height: 25, width: 25}}
                />
              </View>
            </View>
            <View style={styles.cardMiddleContainer}>
              <View style={styles.cardSubMiddleContainer}>
                <View style={styles.cardMatchContainer}>
                  <Image
                    source={require('../../assets/icons/profile.png')}
                    style={{height: 25, width: 25}}
                  />
                  <Text style={styles.subTitle}>RAD</Text>
                </View>
                <Text style={styles.cardText}>Rajnandgaon</Text>
              </View>
              <View style={styles.liveContainer}>
                <Text style={styles.liveText}>LIVE</Text>
              </View>
              <View style={styles.cardSubMiddleContainer}>
                <View style={styles.cardMatchContainer}>
                  <Text style={styles.subTitle}>UTK</Text>
                  <Image
                    source={require('../../assets/icons/profile.png')}
                    style={{height: 25, width: 25}}
                  />
                </View>
                <Text style={styles.cardText}>Uttrakhand</Text>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <View style={styles.cardSubFooter}>
                <Text>UTK: 82/0 (6)</Text>
              </View>
              <Text numberOfLines={1} style={styles.matchInfo}>
                Uttarakhand need 49 runs in 14.0 remaining
              </Text>
            </View>
          </TouchableOpacity>
        )}
      /> */}
    </View>
  );
}
