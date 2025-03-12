import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './tab-styles';

interface ITab {
  selectedTab: string;
  setSelectedTab: (selectedTab: string) => void;
  tabOption: any;
  tabContainerStyle?: any;
}

export default function Tab(props: ITab) {
  const {
    selectedTab,
    setSelectedTab,
    tabOption,
    tabContainerStyle = {},
  } = props;

  return (
    <View style={[styles.container, tabContainerStyle]}>
      {tabOption.map((name: string) => (
        <TouchableOpacity
          style={styles.subTabContainer}
          key={'Tab' + name}
          onPress={() => setSelectedTab(name)}>
          <Text
            style={[
              styles.tabTitle,
              name === selectedTab && styles.tabActiveTitle,
            ]}>
            {name}
          </Text>
          <View
            style={[styles.tab, name === selectedTab && styles.activeTab]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
