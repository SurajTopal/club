import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Collapsible from 'react-native-collapsible';
import {styles} from './accordian-styles';

export const AccordionItem = ({title, children}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => setIsCollapsed(!isCollapsed)}
        style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.contentContainer}>
          {children?.map((description: string) => (
            <Text style={styles.contentText}>{description}</Text>
          ))}
        </View>
      </Collapsible>
    </View>
  );
};
