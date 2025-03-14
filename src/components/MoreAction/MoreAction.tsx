import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Icon} from 'react-native-elements';
import {BottomSheet} from 'react-native-elements';

import {styles} from './moreAction-styles';

const BottomSheetComponent = ({isVisible, toggleSheet}) => {
  return (
    <BottomSheet
      isVisible={isVisible}
      containerStyle={styles.bottomSheetContainer}>
      <View style={styles.sheetContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>More actions</Text>
          <TouchableOpacity onPress={toggleSheet}>
            <Icon type="antdesign" name="close" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Options */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton}>
            <FontAwesome name="gamepad" size={20} color="white" />
            <Text style={styles.optionText}>How to play</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <FontAwesome name="file-text-o" size={20} color="white" />
            <Text style={styles.optionText}>Terms & Conditions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <FontAwesome name="shield" size={20} color="white" />
            <Text style={styles.optionText}>Privacy Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <FontAwesome name="headphones" size={20} color="white" />
            <Text style={styles.optionText}>Help & Support</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};

export default BottomSheetComponent;
