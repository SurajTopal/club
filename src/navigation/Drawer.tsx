import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}>
      <View style={styles.header}>
        {/* Profile Image */}
        <Image
          source={require('../assets/icons/profile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.username}>KSRQRH HEROES</Text>
      </View>

      {/* Menu Items */}
      <TouchableOpacity style={styles.menuItem}>
        <Icon name="credit-card" size={20} color="#fff" />
        <View style={styles.menuItemContent}>
          <Text style={styles.menuText}>My Balance</Text>
          <Text style={styles.menuAmount}>₹0</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addCashButton}>
        <Text style={styles.addCashText}>Add Cash</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Icon name="cog" size={20} color="#fff" />
        <Text style={styles.menuText}>My Info & Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Icon name="shield" size={20} color="#fff" />
        <Text style={styles.menuText}>Responsible Play</Text>
      </TouchableOpacity>

      <Text style={styles.version}>VERSION 1.0.1</Text>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  username: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#333',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  menuItemContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  menuText: {color: '#fff', fontSize: 14},
  menuAmount: {color: '#fff', fontSize: 14},
  addCashButton: {
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    padding: 10,
  },
  addCashText: {color: '#72FF00', fontWeight: 'bold'},
  version: {color: '#777', fontSize: 12, textAlign: 'center', marginTop: 20},
});

export default CustomDrawer;
